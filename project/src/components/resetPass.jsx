import React, { Component } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from "./loginStyle";
import axios from "axios";
import Body from "./body";

class ResetPass extends Component {
    state = { username: null, email: null }

    resetPassword = () => {
        axios.post(this.props.api+"/forgetPassword", {username: this.state.username, email: this.state.email})
        .then(res=>{
            if (res.data.success){
                alert("Email Sent. Please check your email.");
                this.props.setContent(<Body api={this.props.api}/>);
            }
            else{
                alert("Username or Email is incorrect!");
            }
            return res.data;
        })
    };

    render() { 
        return ( <React.Fragment>
            <LoginWrapper>
              <LoginBox>
                <h1>Reset Password:</h1>
                <label>
                  Username:
                  <Input
                    type="text"
                    onChange={e => this.setState({ username: e.target.value })}
                    placeholder="username"
                  />
                </label>
                <label>
                  Email:
                  <Input
                    type="text"
                    onChange={e => this.setState({ email: e.target.value })}
                    placeholder="email"
                  />
                </label>
                <Button
                  onClick={() =>{
                    this.resetPassword();
                  }}
                >
                  Send
                </Button>
              </LoginBox>
            </LoginWrapper>
          </React.Fragment> );
    }
}
 
export default ResetPass;