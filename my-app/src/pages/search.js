import React, { Component } from "react";
import SearchArea from "../components/searchArea";
import LoggedIn from '../components/LoggedNav';
import Header from "../components/header";



class Search extends Component {
        render () {
            return (
               <div>
                    <LoggedIn/>
                    <Header/>
                    <SearchArea/>
               </div>
            )
        }
        
    
}

export default Search;