import React, { Component } from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  NavLink,
} from "react-router-dom";
import News from "./news";

class Client extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: true,
    };

    this.logout = this.logout.bind(this);
  }

  logout() {
    sessionStorage.getItem("userToken", "");
    sessionStorage.clear();
    this.setState({ redirect: false });
  }

  render() {
    const { redirect } = this.state;
    if (!redirect) {
      return <Redirect to="/" />;
    }
    return (
      <Router>
        <div>Đây là trang blog</div>
        <button type="button" className="button" onClick={this.logout}>
          logout
        </button>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <ul class="list-group">
                <li class="list-group-item list-group-item-action flex-column align-items-start">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                  </div>
                  <p class="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small class="text-muted">Donec id elit non mi porta.</small>&nbsp;&nbsp;
                  <NavLink to="/blogs/news/:id">READ</NavLink>
                  <Route path="/blogs/news/:id" component={News} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Client;
