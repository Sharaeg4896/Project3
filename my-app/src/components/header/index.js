import React from "react";
import "./styles.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Header(props) {
  return (
    <header className="headerHeader">
    <h1 className="headerText"> 
        Our essentials to achieve the perfect style at home.
    </h1>
    </header>
  );
}

export default Header;