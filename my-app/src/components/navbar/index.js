import React from "react";
import './styles.css';


function Navbar() {
    return (
      <header className="navHeader">
      <div className="logo"><a href="/"> Know Grow Glow</a></div>
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
  