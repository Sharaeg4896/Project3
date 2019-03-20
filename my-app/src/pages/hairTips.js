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
      .then(res => {
        console.log('res', res.data)
        this.setState({ tips: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  render() {
      return (
        <div>
          <LoggedIn/>
          <Header/>
          <h3>Hair Tips</h3>
          <h4>We all love natural hair, but it  can be overwhelming and tricky. We’ve come up with these 30 natural hair tips to help you with your hair journey.</h4>
          {this.state.tips.map(tip => (
            <Cards
            tips={tip.tips}
            summary={tip.summary}
            image={tip.image}
            
          />

          ))}
        </div>
        
      
      );
  }
}

export default hairTips;