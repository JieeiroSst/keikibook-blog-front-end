import React, { Component } from "react";
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import News from "./news";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: true,
    };

    this.logout = this.logout.bind(this);
  }

  logout() {
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/admin" className="nav-item nav-link active">
                Home <span class="sr-only">(current)</span>
              </NavLink>
              <NavLink to="/admin/news" className="nav-item nav-link active">
                News
              </NavLink>
              <NavLink to="/admin/tags" className="nav-item nav-link active">
                Tags
              </NavLink>
              <NavLink to="/admin/new-tag" className="nav-item nav-link active">
                New-Tag
              </NavLink>
              <NavLink
                to="/admin/feedbacks"
                className="nav-item nav-link active"
              >
                FeedBacks
              </NavLink>
              <NavLink to="/admin/users" className="nav-item nav-link active">
                Users
              </NavLink>
            </div>
          </div>
          <button type="button" onClick={this.logout}>
            Logout
          </button>
        </nav>
        <div className="col-md-10 admin-content">
          <Switch>
            <Route exact path="/admin/news" component={News} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Admin;
