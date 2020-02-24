import React, { Component } from "react";
import { LoginWrapper, LoginBox, Input, Button } from "./loginStyle";
import axios from "axios";
import ResetPass from "./resetPass";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import Register from "./register";
import "./login.css";

class login extends Component {
  state = { username: "", password: "" };

  LogintoDB = json => {
    axios
      .post(this.props.api + "/login", json)
      .then(res => {
        if (!res.data.success && res.data.user == null) {
          alert("Username or Password is incorrect.");
          return 0;
        }
        this.props.login(res.data.user);
      })
      .catch(err => {
        console.log(err);
      });
  };

  responseGoogle = response => {
    if(response != null && response.profileObj.name != null && response.El != null){
      this.LogintoDB({
        username: response.profileObj.name,
        password: response.El
      });
    }
  };

  responseFacebook = response => {
    if(response != null && response.name != null && response.id != null){
      this.LogintoDB({
        username: response.name,
        password: response.id
      });
    }
  };

  render() {

    return (
      <React.Fragment>
        <LoginWrapper>
          <LoginBox>
            <h1>Sign in</h1>
            <label>
              Username:
              <Input
                type="text"
                onChange={e => this.setState({ username: e.target.value })}
                placeholder="username"
              />
            </label>
            <label>
              Password:
              <Input
                type="password"
                onChange={e => this.setState({ password: e.target.value })}
                placeholder="password"
              />
            </label>
            <Button
              onClick={() =>
                this.LogintoDB({
                  username: this.state.username,
                  password: this.state.password
                })
              }
            >
              Sign in
            </Button>
            <br />
            <GoogleLogin
              style={{ display: "inline-block" }}
              clientId={
                "943603281803-2glvdsuq90n8lbcttmlkk63t0nh1amnl.apps.googleusercontent.com"
              }
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              render={renderProps => (
                <button
                  onClick={renderProps.onClick}
                  type="button"
                  class="google-button1"
                >
                  <span class="google-button__icon1">
                    <svg
                      viewBox="0 0 366 372"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z"
                        id="Shape"
                        fill="#EA4335"
                      />
                      <path
                        d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z"
                        id="Shape"
                        fill="#FBBC05"
                      />
                      <path
                        d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z"
                        id="Shape"
                        fill="#4285F4"
                      />
                      <path
                        d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z"
                        fill="#34A853"
                      />
                    </svg>
                  </span>
                  <span class="google-button__text1">Google</span>
                </button>
              )}
            />
            <FacebookLogin
              style={{ display: "inline-block" }}
              appId="449634015806449" //APP ID NOT CREATED YET
              fields="name,email,picture"
              callback={this.responseFacebook}
              render={renderProps => (
                <div>
                  <div>
                    <a href="#" class="facebook-login1">
                      <span class="facebook-icon1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 216 216"
                          class="_5h0m"
                          color="#FFFFFF"
                        >
                          <path
                            fill="#FFFFFF"
                            d="
                    M204.1 0H11.9C5.3 0 0 5.3 0 11.9v192.2c0 6.6 5.3 11.9 11.9
                    11.9h103.5v-83.6H87.2V99.8h28.1v-24c0-27.9 17-43.1 41.9-43.1
                    11.9 0 22.2.9 25.2 1.3v29.2h-17.3c-13.5 0-16.2 6.4-16.2
                    15.9v20.8h32.3l-4.2 32.6h-28V216h55c6.6 0 11.9-5.3
                    11.9-11.9V11.9C216 5.3 210.7 0 204.1 0z"
                          />
                        </svg>
                      </span>
                      <span
                        onClick={renderProps.onClick}
                        class="facebook-login-text1"
                      >
                        Facebook
                      </span>
                    </a>
                  </div>
                </div>
              )}
            />
            <a
              onClick={() =>
                this.props.setContent(
                  <ResetPass
                    setContent={this.props.setContent}
                    api={this.props.api}
                  />
                )
              }
            >
              Forget Password?
            </a>
            <hr />
            <span>Don't have an account?</span>
            <span
              style={{ margin: "5px", color: "red" }}
              variant="outline-primary"
              onClick={() =>
                this.props.setContent(
                  <Register
                    login={this.login}
                    api={this.props.api}
                    setContent={this.props.setContent}
                  />
                )
              }
            >
              Get started for free!
            </span>
            <hr />
            <br />
          </LoginBox>
        </LoginWrapper>
      </React.Fragment>
    );
  }
}

export default login;
