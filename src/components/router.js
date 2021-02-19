import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../login";
import Signup from "../signup";
import NotFound from "./not_found";

import Main from "./main";

import View from "./client/menu/view";
import Favourite from "./client/menu/favourite";
import Blog from "./client";
import NewDetail from "./client/newDetail";

import News from "./admin/news";
import Tags from "./admin./tags";
import NewTag from "./admin./new-tag";
import Feedbacks from "./admin./feedbacks";
import Users from "./admin./users";
import Admin from "./admin";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route component={NotFound}></Route>

          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/view" component={View} />
          <Route path="blog/favourite" component={Favourite} />
          <Route path="/blogs/news/:id" component={NewDetail} />

          <Route exact path="/admin" component={Admin} />
          <Route path="/admin/news" component={News}></Route>
          <Route path="/admin/tags" component={Tags}></Route>
          <Route path="/admin/new-tag" component={NewTag}></Route>
          <Route path="/admin/feedbacks" component={Feedbacks}></Route>
          <Route path="/admin/users" component={Users}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
