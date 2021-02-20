import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">Grayscale</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              This life is nothingness man made alive and dead.
            </h2>
            <a className="btn btn-primary js-scroll-trigger" href="#about">
              Get Started
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
