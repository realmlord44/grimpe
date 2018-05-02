import React from "react";
import "./users.css";

class Users extends React.Component {

  render(){
    const title = this.props.user.user_name;

    return(
      <div className="users">
        <div className="user-box">
          {title}
        </div>
      </div>
    );
  }
}

export default Users;
