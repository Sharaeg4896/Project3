import React from "react";
import "./styles.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Product(props) {
  return (
    <h1> 
        This is the product component.
    </h1>
  );
}

export default Product;
