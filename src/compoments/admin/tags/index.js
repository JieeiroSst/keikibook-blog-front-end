import React, { Component } from "react";
import { Link } from "react-router-dom";

class Tags extends Component {
  render() {
    return (
      <div>
        <h2>List of Tags</h2>
        <Link to="/admin/tags/create">Create Tags</Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>
                <button>
                  <Link to="/admin/tags/update/:id">update</Link>
                </button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tags;
