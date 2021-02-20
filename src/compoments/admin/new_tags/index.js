import React, { Component } from "react";

class NewsTag extends Component {
  render() {
    return (
      <div>
      <h2>List of New Tags</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tags</th>
            <th scope="col">News</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
    );
  }
}

export default NewsTag;
