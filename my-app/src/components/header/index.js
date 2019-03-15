import React from "react";
import "./styles.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Header(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
     {/* <header className="headerHeader"> */}
     <div className="container">
     <h1 className="headerText"> Know</h1>
     <p>We desire for all people to know how to style thier unique brand of beauty</p>
     <h1 className="headerText" >Grow</h1>
     <p>We believe our beauty is reflected in adaption, revision and change</p>
     <h1 className="headerText">Glow</h1>
     <p>We reflect beauty when we glow from within</p>
     <h2>Search and Find Your Look Below</h2>
    {/* </header> */}</div>
    
    </div>
   
  );
}

export default Header;