import React from "react";
import Select from 'react-select';
import './styles.css';

const hairstyles = [
  { label: "Twistout", value: 1 },
  { label: "Braidout", value: 2 },
  { label: "Bantu", value: 3 },
  { label: "Wash N Go", value: 4 },
  { label: "Flexi Rods", value: 5 },
  { label: "Silk Press", value: 6 }
];

const products = [
  { label: "Cleanser", value: 1 },
  { label: "Conditioner", value: 2 },
  { label: "Moisturizer", value: 3 },
  { label: "Styling Cream", value: 4 },
  { label: "Gels", value: 5 },
  { label: "Oil", value: 6 }
];

function SearchType() {
    return (
      // <header className="searchHeader">
      // <h1 className="searchText"> Style Your Hair</h1>
      // <h1 className="searchText"> Find Your Product</h1>
      // </header>
      <div className="container">
           <div className="row">
             <div className="col-md-4">
               <Select options={ hairstyles } />
             </div>
             <div className="col-md-4">
             <Select options={ products } />
             </div>
           </div>
           </div>
    )
  }
  
  export default SearchType;