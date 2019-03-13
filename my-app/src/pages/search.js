import React, { Component } from "react";
import SearchArea from "../components/SearchArea";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";


class Search extends Component {
    state = {
        username: "",
        password: ""
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        if (name === "password") {
            value = value.substring(0, 20);
        }
        
        this.setState({
          [name]: value
        });
      };
    // Client request to sign up
    handleSignupSubmit = event => {
        event.preventDefault();
        var username = this.state.username;
        var password = this.state.password;
        console.log('grabbed on view ', username, password);

       if (this.state.password.length < 7) {
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
            username: "",
            password: ""
        })
    }

    // Client request to login
    handleLoginSubmit = event => {
        event.preventDefault();
        var username = this.state.username;
        var password = this.state.password;
        console.log('login ', username, password);

        if(username && password) {
            API.verifyAccount({
                username: username,
                password: password
            })
            .then(function() {console.log('created login credentials')} )
            .catch(err => console.log(err));
        }

        this.setState({
            username: "",
            password: ""
        })
    }

    render() {
        return (
            <div>
                <form>
                    <h3>Sign up</h3>
                    <Input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="Username (required)"
                    />
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="Password (required)"
                    />
                    <FormBtn
                        disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleSignupSubmit}
                    >
                        Create Account
                    </FormBtn>
                </form>
                <form>
                    <h3>Login</h3>
                    <Input
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="Username (required)"
                    />
                    <Input
                    value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="Password (required)"
                    />
                    <FormBtn
                        disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleLoginSubmit}
                    >
                        Login 
                    </FormBtn>
                </form>
                <SearchArea/>
            </div>
               
    
        );
    }
}

export default Search;