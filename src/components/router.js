import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../login";
import Signup from "../signup";
import NotFound from "./not_found";

import View from "./client/menu/view";
import Favourite from "./client/menu/favourite";
import Blog from "./client";
import NewDetail from "./client/newDetail";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route component={NotFound}></Route>

          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/view" component={View} />
          <Route path="blog/favourite" component={Favourite} />
          <Route path="/blogs/news/:id" component={NewDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
