import React from "react";
import "./styles.css";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Products(props)  {
    return (
      <div class="container">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="card-header">{ props.brand }</div>
            <div className="card-body">
              <h6 className="card-title">{props.category}: { props.productName }</h6>
              <h6 className="card-text">Ingredients: 
                {props.ingredients}
              </h6>
              <h6 className="card-text">{props.description}</h6>
            </div>
          </div>
          <div className="col-md-4">
            <img src={require(`../../images/HairImages/${props.image}`)} alt='placeholder'></img>
          </div>
        </div>
      </div>
    </div>
    );
}
export default Products;