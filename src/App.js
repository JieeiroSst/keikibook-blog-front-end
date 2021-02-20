import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Customer from "./compoments/customer";
import Admin from "./compoments/admin";
import Home from "./compoments/home";
import NotFound from "./compoments/not_found";
import Login from "./compoments/home/login";
import Signup from "./compoments/home/signup";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/blog" component={Customer} />
        <Route exact path="/admin" component={Admin} />
        <Route exact component={NotFound}></Route>
      </Switch>
    );
  }
}

export default App;
