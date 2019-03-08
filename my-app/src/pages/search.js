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
        const { name, value } = event.target;
        console.log(event.target.value);
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.username && this.state.password) {
            API.createAccount({
                username: this.state.username,
                password: this.state.password
            })
            .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <div>
                <form>
                    <h3>Sign up</h3>
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
                        onClick={this.handleFormSubmit}
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
                        disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleFormSubmit}
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