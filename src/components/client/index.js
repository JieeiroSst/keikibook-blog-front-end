import React, { Component } from "react";
import { BrowserRouter  } from "react-router-dom";
import Menu from "./menu";
import New from "./news";

class Client extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ul className="list-group">
                <New />
              </ul>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Client;
