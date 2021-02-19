import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Menu from "./menu";
import Row from "./row";
class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRedirect: true,
    };

    this.logout = this.logout.bind(this);
  }

  logout() {
    sessionStorage.clear();
    this.setState({ isRedirect: false });
  }

  render() {
    const { isRedirect } = this.state;
    if (!isRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div id="wrapper" className="container-fluid">
        <Menu />
        <Row />
      </div>
    );
  }
}

export default Admin;
