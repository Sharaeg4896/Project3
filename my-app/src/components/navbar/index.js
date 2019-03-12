import React from "react";
import './styles.css';

function Navbar() {
    return (
      <header className="navHeader">
      <nav className="navbar navbar-inverse">
      <div>
      </div>
      <div className="logo"><a href="/">Know Grow Glow </a></div>
      <div className="spacer"/>
        <div className ="navigation_links">
          <ul>
            <li>
            <a href="/" className='nav-link'>Hair Tips</a>
            </li>
          </ul>
        </div>
      </nav>
      </header>
    );
  }
  
  export default Navbar;
  