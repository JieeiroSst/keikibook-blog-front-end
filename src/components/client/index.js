import React, { Component } from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  NavLink,
} from "react-router-dom";
import { useQuery } from "@apollo/client";
import News from "./news";
import * as types from "../../graphql/client/query";

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

  showNews() {}

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
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small className="text-muted">
                    Donec id elit non mi porta.
                  </small>
                  &nbsp;&nbsp;
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
