import React, { Component } from "react";

class UpdateTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.onchange = this.onchange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSaveData = this.onSaveData.bind(this);
  }

  onChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  onSaveData() {}

  render() {
    return (
      <div>
        <h2>Update Tags</h2>
        <form onSubmit={this.handleSubmit}>
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
              name="name"
              onChange={this.onchange}
              value={this.state.name}
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={this.onSaveData}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateTags;
