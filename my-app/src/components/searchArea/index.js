// import React from "react";
import React, { Component } from "react";
// import Select from 'react-select';
import { withRouter } from 'react-router-dom'
// import Results from '../../pages/results.js';
import Products from '../products';
import Hairstyles from '../hairstyles';
import './styles.css';


class SearchType extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      products: [],
      hairstyles: [],
      valueHair: '',
      valueProduct: '' ,
      data: []
    };
    

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeProduct = this.handleChangeProduct.bind(this);
    this.handleSubmitHairstyle = this.handleSubmitHairstyle.bind(this);
    this.handleSubmitProduct = this.handleSubmitProduct.bind(this);
  }

  handleChange(event) {
    this.setState({valueHair: event.target.value});
  }

  handleChangeProduct(event) {
    this.setState({valueProduct: event.target.value});
  }

  handleSubmitHairstyle(event) {
    this.setState({products: ''})
    console.log(this.state.valueHair);
    event.preventDefault();

    fetch('/hairstyles/' + this.state.valueHair)
      .then(res => res.json())
      .then(data => {
        this.setState({hairstyles: data})
        console.log("HAHAHA: " + this.state.hairstyles[0].hairstyle);
        console.log(this.state.hairstyles.length);
      })
  };

//pass the prodct value in the url of result; remove exact pathfrom router; then submit the fetch for data; then display
  handleSubmitProduct(event) {
    this.setState({hairstyles: ''})
    console.log(this.state.valueProduct)
    event.preventDefault();
    
    fetch('/products/' + this.state.valueProduct)
      .then(res => res.json())
      .then(data => {
        this.setState({products: data})
        console.log("LALALAL: " + this.state.products[0].category);
        console.log(this.state.products.length);
        // this.props.history.push({
        //     pathname: '/result',
        //     state: { detail: data }
        //   });
      })
  };
    //  {
        
        // console.log("The response: " + res); 
        //Set State of products[]
        // this.setState({ products: res})
        // console.log("PRODUCTS: " + this.state.products.length)
        // this.props.history.push({
        //   pathname: '/result',
        //   state: { detail: res }
        // });
        // }  
      //  }).catch(err => console.log(err));
      // };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmitHairstyle} >
              <div className="form-group">
                <label for="disabledSelect">Choose Your Hairstyle</label>
                <select value={this.state.valueHair} onChange={this.handleChange} className="browser-default custom-select">
                  <option value="Twistout">Twistout</option>
                  <option value="Braidout">Braidout</option>
                  <option value="Bantu Knots">Bantu Knots</option>
                  <option value="Wash N Go">Wash N Go</option>
                  <option value="Flexi Rods">Flexi Rods</option>
                  <option value="Silk Press">Silk Press</option>
                </select>
                <button className="btn btn-hairstyle">Submit</button>
              </div>
            </form>
          </div>

          <div className="col-md-6">
            <form onSubmit={this.handleSubmitProduct}>
              <div className="form-group">
                <label for="disabledSelect">Choose Your Product</label>
                <select value={this.state.valueProduct} onChange={this.handleChangeProduct} className="browser-default custom-select">
                  <option value="Cleanser">Cleanser</option>
                  <option value="Conditioner">Conditioner</option>
                  <option value="Moisturizer">Moisturizer</option>
                  <option value="Styling Cream">Styling Cream</option>
                  <option value="Gels">Gels</option>
                  <option value="Oil">Oils</option>
                </select>
                <button type="submit" className="btn btn-product">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div>
          {this.state.products.length ? (
              <div>
              <h2>Product Results</h2>
                {this.state.products.map(product => { 
                  return (
                    <Products
                      key={product.id}
                      brand={product.brand}
                      productName={product.productName}
                      ingredients={product.ingredients}
                      category={product.category}
                      image={product.image}
                      />
                    );
                  }
                )}
                
              </div>
            ) : (
              <span></span>
            )}
        </div>
        <div>
        {this.state.hairstyles.length ? (
          <div>
          <h2>Hairstyles Results</h2>
            {this.state.hairstyles.map(hairstyle => { 
              return (
                <Hairstyles
                  key={hairstyle.id}
                  hairstyle={hairstyle.hairstyle}
                  products={hairstyle.products}
                  youtuber={hairstyle.youtuberName}
                  youtubeURL={hairstyle.youtubeURL}
                  />
                );
              }
            )}
            
          </div>
        ) : (
          <span></span>
        )}
        </div>
    </div>
    )
  }
  
}

export default withRouter(SearchType);