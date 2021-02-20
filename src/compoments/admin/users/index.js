import React, { Component } from "react";

class Users extends Component {
  render() {
    return (
      <div>
        <h2>List of Users</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First-Name</th>
              <th scope="col">Last-Name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Created-At</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
