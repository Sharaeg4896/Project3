/*this index is for the navbar*/

import React, { Component } from "react";
import API from '../../utils/API'
import './styles.css';




class Navbar extends Component {
  state = {
      usernameSignup: "",
      passwordSignup: "",
      usernameLogin: "",
      passwordLogin: "",
      
  }
  

  // Client request to login
  handleLoginSubmit = event => {
      event.preventDefault();
      var username = this.state.usernameLogin;
      var password = this.state.passwordLogin;
      console.log('login ', username, password);

      if(username && password) {
          API.verifyAccount({
              username: username,
              password: password
          })
          .then(function() {
            window.location.href= '/search'
          })
          .catch(err => console.log(err));
      }

      this.setState({
          usernameLogin: "",
          passwordLogin: ""
      })
  }

  // handleHairTips = event => {
  //   console.log('clicked hairtips')
  //   event.preventDefault();
  //       API.getHairTips()
  //       .then(function () {
  //         window.location.href= '/hairTips'
  //       })
  // }

   // Client request to sign up
   handleSignupSubmit = event => {
    event.preventDefault();
    var username = this.state.usernameSignup;
    var password = this.state.passwordSignup;
    console.log(this);
    console.log('grabbed on view ', username, password);

   if (this.state.passwordSignup.length < 7) {
       alert('Password requird length is 7 to 20 charaters long')
   } else {
    if(username && password) {
        API.createAccount({
            username: username,
            password: password
        })
        .then(function() {console.log('created signup credentials')} )
        .catch(err => console.log(err));
    }
   }

    this.setState({
        usernameSignup: "",
        passwordSignup: ""
    })
}

  handleInputChange = event => {
      let value = event.target.value;
      const name = event.target.name;
      
      console.log(value)
      
      console.log(name)
      
  
      if (name === "passwordSignup") {
          value = value.substring(0, 20);
      }
      
      this.setState({
        [name]: value
      });
    };


    render () {
      return (
        <div>
      <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
        <div className="container col-lg-6 navbar-inline">
          <a className="navbar-brand" href="/">Know. Grow. Glow.
          {/*<img
              src={require(""")
              width="50"
              height="50"
              alt=""
          />*/}
          </a>
        </div> 
          {/* <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <a className="nav-link" href="/search">New Search</a>
            </li>
            <li className="nav-itme">
              <a className="nav-link" href='/hairTips'> Hair Tips
              </a>
            </li>
          </ul> */}
        <div className="container col-lg-6 form-inline navbar-right justify-content-end">  
          <form className="form-inline my-2 my-lg-0">
            <input 
              className="form-control mr-sm-2" 
              placeholder="Username" 
              name="usernameLogin"  
              value={this.state.usernameLogin}
              onChange={this.handleInputChange}>
              </input>
            <input 
            className="form-control mr-sm-2" 
            placeholder="Password" 
            name="passwordLogin" 
            value={this.state.passwordLogin}
            onChange={this.handleInputChange}>
            </input>
            <button className="btn" type="submit"onClick={this.handleLoginSubmit}>Log in</button> 
            <button className="btn" type="button" data-toggle="modal" data-target="#exampleModal"  >Sign up
            </button>
          </form>
        </div>  
    </nav>

  


    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Create your accout</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <form>
          <div className="form-group">
            <label for="username">Username</label>
            <input
             className="form-control" 
             placeholder="Enter username" 
             name="usernameSignup" 
             value={this.state.usernameSignup} 
             onChange={this.handleInputChange}>
             </input>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
            placeholder="Password" 
            name="passwordSignup" 
            value={this.state.passwordSignup} 
            onChange={this.handleInputChange}>
            </input>
          </div>
          <button type="submit" className="btn" onClick={this.handleSignupSubmit}>Submit</button>
        </form>
        </div>
      </div>
    </div>
  </div>
  </div>
      )
      
  }
} 

export default Navbar;
     