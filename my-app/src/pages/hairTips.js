import React, { Component } from "react";
import Cards from '../components/tip';
import API from '../utils/API';
import Header from "../components/header";
import LoggedIn from '../components/LoggedNav';
 
  
class hairTips extends Component {
  state = {
    tips: []
  }

  componentDidMount() {
    this.getTips();
  }

  getTips = () => {
    API.getSavedTips()
      .then(res => 
        this.setState({ tips: res.data}))
      .catch(err => {
        console.log(err)
      })
  }
  
  render() {
      return (
        <div>
          <LoggedIn/>
          <Header/>
          {this.state.tips.map(tip => (
            <Cards
            tip={tip.tip}
            summary={tip.summary}
          />

          ))}
        </div>
        
      
      );
  }
}

export default hairTips;