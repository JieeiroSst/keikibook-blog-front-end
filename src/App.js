import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Main from "./components/main";
import Admin from "./components/admin";
import Client from "./components/client";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/"></Link>
          <Link to="/admin"></Link>
          <Link to="/blog"></Link>
        </div>
        <Route exact path="/" component={Main} />
        <Route path="/admin" component={Admin} />
        <Route path="/blog" component={Client} />
      </Router>
    );
  }
}

export default App;
