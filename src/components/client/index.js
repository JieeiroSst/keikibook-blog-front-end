import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class Client extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: true,
    };

    this.logout = this.logout.bind(this);
  }

  logout() {
    sessionStorage.getItem("userToken", "");
    sessionStorage.clear();
    this.setState({ redirect: false });
  }

  render() {
    const { redirect } = this.state;
    if (!redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div>"day la trang blog"</div>
        <button type="button" className="button" onClick={this.logout}>
          logout
        </button>
      </div>
    );
  }
}

export default Client;
