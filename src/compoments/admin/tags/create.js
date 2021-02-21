import React, { Component } from "react";

class CreateTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.onChange = this.onChange.bind(this);
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
        <h2>Create Tags</h2>
        <form onSubmit={this.handleSubmit}>
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
              onChange={this.onChange}
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

export default CreateTags;
