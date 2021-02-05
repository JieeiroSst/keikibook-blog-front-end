import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div class="container-fluid h-100 bg-light text-dark">
        <div class="row justify-content-center align-items-center">
          <h1>Signup</h1>
        </div>
        <hr />
        <div class="row justify-content-center align-items-center h-100">
          <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <form action="">
              <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter username"
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
                      <button class="col-6 btn btn-primary btn-sm float-right">
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
