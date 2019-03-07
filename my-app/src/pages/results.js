import React, { Component } from "react";
import Hairstyles from '../components/Hairstyles';
import Products from "../components/Products";

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