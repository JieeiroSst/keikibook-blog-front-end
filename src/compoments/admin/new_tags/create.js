import React, { Component } from "react";

class CreateNewTag extends Component {
  render() {
    return <div>
    <h2>Create new tag</h2>
    <form>
      <div class="mb-3">
        <label for="disabledSelect" class="form-label">
          Disabled select menu
        </label>
        <select id="disabledSelect" class="form-select">
          <option>Disabled select</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="disabledSelect" class="form-label">
          Disabled select menu
        </label>
        <select id="disabledSelect" class="form-select">
          <option>Disabled select</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>;
  }
}

export default CreateNewTag;
