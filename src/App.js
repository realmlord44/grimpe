import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Climbs from './components/climbs';
import Users from './components/users';
import Nav from './components/nav';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

fetchData(){
  const url = "https://randomuser.me/api/?results=10"
  fetch(url)
    .then(response => response.json())
    .then((data) =>{
      this.setState({
        users:data
      })
      console.log(data)
    })
}
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Route path='/climbs' component={Climbs} />
          <Route path='/users' component={Users} />

        </div>
      </Router>

    )
  }
}

export default App;
