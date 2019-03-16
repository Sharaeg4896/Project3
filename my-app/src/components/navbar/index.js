/*this index is for the navbar*/

import React from "react";
import './styles.css';



function Navbar() {
    return (
      <header className="navHeader">
      <img
        src="../../images/logo2"
        width="30"
        height="30"
        alt="logo"
      />
      <ul class="nav justify-content-end">
      <li class="nav-item">
      <a class="nav-link active" href="/hairTips">Hair Tips</a>
      <a class="nav-link active" href="/search">New Search</a>
  </li>
</ul>


      </header>
    );
  }

  
  
  export default Navbar;
  