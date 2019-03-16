import React from "react";
import "./styles.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Header(props) {
  return (
    <div><h1>START YOUR HAIRCARE JOURNEY</h1>
    <p>Haircare is an evolving personal journey and we’re here to guide you along the way.</p>
    <p><i class="down"></i></p>
    </div>
    
  );
}

export default Header;