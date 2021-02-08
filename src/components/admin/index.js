import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Earning from "./chart/earnings";
import Revenue from "./chart/revenue";
import Request from "./chart/resquest";
import Report from "./chart/report";
import EarningMonthly from "./information/earnings";
import Annual from "./information/annual";
import Task from "./information/task";
import RequestMonthly from "./information/request";
import Menu from "./menu";
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
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"></nav>
            <div class="container-fluid">
              <div class="row">
                <EarningMonthly />
                <Annual />
                <Task />
                <RequestMonthly />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <Earning />
          &nbsp;&nbsp;&nbsp;
          <Revenue />
          &nbsp;&nbsp;&nbsp;
          <Request />
          &nbsp;&nbsp;&nbsp;
          <Report />
          &nbsp;&nbsp;&nbsp;
        </div>
      </div>
    );
  }
}

export default Admin;
