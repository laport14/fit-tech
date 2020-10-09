import React from 'react';
import {Link} from "react-router-dom"

function NavBar(props) {
  return (
    <div>
      <Link to="/">
        <img alt="Home Icon" src="https://tinyurl.com/y2qvmk3x" width='25px' height="25px" />
      </Link>
    </div>
  );
}

export default NavBar;