import React, { Component } from "react";
import { postData } from "./services/postData";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false,
      permission: "",
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async login() {
    const { username, password } = this.state;
    if (username && password) {
      const response = await postData(
        `user/login?username=${username}&password=${password}`,
        this.state
      );
      if (response.data === "") {
        alert(response.message);
        return <Redirect to={"/login"} />;
      }
      alert(response.message);
      sessionStorage.setItem("userToken", JSON.stringify(response));
      this.setState({
        redirect: true,
        permission: response.permission,
      });
    }
  }

  onChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { redirect, permission } = this.state;
    if (sessionStorage.getItem("userToken") && redirect) {
      if (permission === "private") {
        return <Redirect to={"/admin"} />;
      }
      return <Redirect to={"/blog"} />;
    }
    return (
      <div class="container-fluid h-100 bg-light text-dark">
        <div class="row justify-content-center align-items-center">
          <h1>Login</h1>
        </div>
        <hr />
        <div class="row justify-content-center align-items-center h-100">
          <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <form onSubmit={this.handleSubmit} method="POST">
              <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter username"
                  name="username"
                  onChange={this.onChange}
                  value={this.state.username}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter password"
                  name="password"
                  onChange={this.onChange}
                  value={this.state.password}
                />
              </div>
              <div class="form-group">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <button class="col-6 btn btn-secondary btn-sm float-left">
                        Reset
                      </button>
                    </div>
                    <div class="col">
                      <button
                        class="col-6 btn btn-primary btn-sm float-right"
                        onClick={this.login}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
