import React from "react";
import './styles.css';


function Navbar() {
    return (
      <header className="navHeader">
      <div className="logo"><a href="/"> Know Grow Glow</a></div>
      <ul class="nav justify-content-end">
      <li class="nav-item">
      <a class="nav-link active" href="/">Hair Tips</a>
      <a class="nav-link active" href="/">New Search</a>
  </li>
</ul>
      </header>
    );
  }

  
  
  export default Navbar;
  