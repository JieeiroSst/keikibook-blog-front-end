import React, { Component } from "react";

class UpdateNews extends Component {
  render() {
    return (
      <div>
        <h2>Update News</h2>
        <form>
          <input type="hidden" value="" name="" />
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Title
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Description
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label for="disabledSelect" class="form-label">
              Tags
            </label>
            <select id="disabledSelect" class="form-select">
              <option>Disabled select</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Content
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="file-field">
            <div class="z-depth-1-half mb-4">
              <img
                src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                class="img-fluid"
                alt="example placeholder"
              />
            </div>
            <div class="d-flex justify-content-center">
              <div class="btn btn-mdb-color btn-rounded float-left">
                <span>Choose file</span>
                <input type="file" />
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateNews;
