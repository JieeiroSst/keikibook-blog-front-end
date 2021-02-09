import React, { Component } from "react";
import Earning from "./chart/earnings";
import Revenue from "./chart/revenue";
import Request from "./chart/resquest";
import Report from "./chart/report";
import EarningMonthly from "./information/earnings";
import Annual from "./information/annual";
import Task from "./information/task";
import RequestMonthly from "./information/request";

class Row extends Component {
  render() {
    return (
      <div>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"></nav>
            <div className="container-fluid">
              <div className="row">
                <EarningMonthly />
                <Annual />
                <Task />
                <RequestMonthly />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
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

export default Row;
