import React, { Component } from "react";
import {
  NavLink,
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import News from "./news";
import Tags from "./tags";
import NewTag from "./new-tag";
import Feedbacks from "./feedbacks";
import Users from "./users";
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
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NavLink exact to="/admin" className="nav-item nav-link active">
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
            <Switch>
              <Route exact path="/admin" />
              <Route path="/admin/news" component={News}></Route>
              <Route path="/admin/tags" component={Tags}></Route>
              <Route path="/admin/new-tag" component={NewTag}></Route>
              <Route path="/admin/feedbacks" component={Feedbacks}></Route>
              <Route path="/admin/users" component={Users}></Route>
            </Switch>
          </div>
          <button type="button" onClick={this.logout}>
            Logout
          </button>
        </nav>
      </Router>
    );
  }
}

export default Menu;
