import React from "react";
import "./styles.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Hairstyles(props) {
  return (
    <h1> 
        This is Hairstyles component.
    </h1>
  );
}

export default Hairstyles;
