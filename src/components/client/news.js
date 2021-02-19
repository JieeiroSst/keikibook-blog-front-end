import React, { Component } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: null,
    };
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <li className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small className="text-muted">Donec id elit non mi porta.</small>
            &nbsp;&nbsp;
            <NavLink to="/blogs/news/:id">READ</NavLink>
          </li>
        </BrowserRouter>
      </div>
    );
  }
}

export default News;
