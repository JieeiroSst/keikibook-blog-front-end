import React, { Component } from "react";

class UpdateTags extends Component {
  render() {
    return (
      <div>
        <h2>Update Tags</h2>
        <form>
          <input type="hidden" value="" name="" />
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name Tag
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateTags;