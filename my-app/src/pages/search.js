import React, { Component } from "react";
import SearchArea from "../components/searchArea";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";


class Search extends Component {
    state = {
        username: "",
        password: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(event.target.value);
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

        if(username && password) {
            API.createAccount({
                username: username,
                password: password
            })
            .then(function() {console.log('created login credentials')} )
            .catch(err => console.log(err));
        }
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
                        // disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleSignupSubmit}
                    >
                        Create Account
                    </FormBtn>
                </form>
                <form>
                    <h3>Login</h3>
                    <Input
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="Username (required)"
                    />
                    <Input
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="Password (required)"
                    />
                    <FormBtn
                        // disabled={!(this.state.username && this.state.password)}
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