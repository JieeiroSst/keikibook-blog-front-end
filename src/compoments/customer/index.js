import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Home from "./home";

class Customer extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container mainContent">
            <Switch>
              <Route exact path="/blog" component={Home} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Customer;
