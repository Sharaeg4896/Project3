import React from 'react';

function loggedIn () {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">
            <img
              src={require("../../images/logo.png")}
              width="125"
              height="125"
              alt="logo"
            />
          </a>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <a className="nav-link" href="/search">New Search</a>
            </li>
            <li className="nav-itme">
              <a className="nav-link" href='/hairTips'> Hair Tips
              </a>
            </li>
          </ul>
      </nav>
</div>
    )
}

export default loggedIn;