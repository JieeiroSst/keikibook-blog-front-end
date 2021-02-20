import React, { Component } from "react";
import { Link } from "react-router-dom";

class News extends Component {
  render() {
    return (
      <div>
        <h2>List of News</h2>
        <Link to="/admin/news/create">Create News</Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Images</th>
              <th scope="col">Detail</th>
              <th scope="col">Created-At</th>
              <th scope="col">Top-Hot</th>
              <th scope="col">View-count</th>
              <th scope="col">Content</th>
              <th scope="col">Tag-Id</th>
              <th scope="col">Active</th>
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
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <button>
                  <Link to="/admin/news/update/:id">Update</Link>
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

export default News;
