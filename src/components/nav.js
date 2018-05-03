import React from "react";
import {NavLink} from "react-router-dom";
import "./nav.css"

function Nav () {
  return(
    <ul className='nav'>
      <li>
        <NavLink activeClassName='active' to='/climbs'>
          Climbs
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/users'>
          Users
        </NavLink>
      </li>
    </ul>
  )
}

export default Nav;
