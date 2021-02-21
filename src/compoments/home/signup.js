import React, { Component } from "react";
import { postData } from "../../services/postData";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isRedirect: false,
    };
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async signup() {
    const { username, password } = this.state;
    postData(
      `user/signup?username=${username}&password=${password}`,
      this.state
    ).then((result) => {
      let response = result;
      if (response) {
        this.setState({
          isRedirect: true,
        });
      }
    });
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
    const { isRedirect } = this.state;
    if (isRedirect) {
      return <Redirect to={"/login"} />;
    }
    return (
      <div className="container-fluid h-100 bg-light text-dark">
        <div className="row justify-content-center align-items-center">
          <h1>Signup</h1>
        </div>
        <hr />
        <div className="row justify-content-center align-items-center h-100">
          <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <form onSubmit={this.handleSubmit} method="POST">
              <div className="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter username"
                  name="username"
                  onChange={this.onChange}
                  value={this.state.username}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter password"
                  name="password"
                  onChange={this.onChange}
                  value={this.state.password}
                />
              </div>
              <div className="form-group">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <button className="col-6 btn btn-secondary btn-sm float-left">
                        Reset
                      </button>
                    </div>
                    <div className="col">
                      <button
                        className="col-6 btn btn-primary btn-sm float-right"
                        onClick={this.signup}
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

export default SignUp;
