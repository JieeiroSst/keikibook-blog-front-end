import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Menu from "./menu";
import Row from "./row";
class Admin extends Component {
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
      <div id="wrapper" className="container-fluid">
        <Menu />
        <Row />
      </div>
    );
  }
}

export default Admin;
