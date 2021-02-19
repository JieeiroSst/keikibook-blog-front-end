import React, { Component } from "react";
import {
  NavLink,
  BrowserRouter,
  Redirect,
} from "react-router-dom";

class Menu extends Component {
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
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog/view">
                View
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog/favourite">
                Favourite
              </NavLink>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <button type="button" className="button" onClick={this.logout}>
              logout
            </button>
          </ul>
        </nav>
      </BrowserRouter>
    );
  }
}

export default Menu;
