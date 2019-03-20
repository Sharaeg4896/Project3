export default Hairstyles;
import React from "react";
import "./styles.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Hairstyles(props)  {
  return (
    <div class="container">
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-6">
          <div className="card-header">{ props.hairstyle }</div>
          <div className="card-body">
            <h6 className="card-title">{props.youtuber}</h6>
            <h6 className="card-text">Products: 
              {props.products}
            </h6>
            <h6 className="card-text">{props.description}</h6>
          </div>
        </div>
        <div className="col-md-6 video">
        <iframe width="540" height="315" title="style" src="https://www.youtube.com/embed/uYXgMR1Ouks" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hairstyles;