import React, { Component } from "react";
import Hairstyles from '../components/hairstyles';
import Products from "../components/products";

class Results extends Component {
    render() {
        return (
            <div>
                <Hairstyles/>
                <Products/>
            </div>
        );
    }
}

export default Results;