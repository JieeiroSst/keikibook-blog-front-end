import React, { Component } from "react";
import Login from "../login";
import Signup from "../signup";
import { NavLink, BrowserRouter as Router, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Router>
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              keikibook-blog
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <NavLink
                  className="nav-item"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "black",
                  }}
                  to="/login"
                >
                  Login
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink
                  className="nav-item"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "black",
                  }}
                  to="/signup"
                >
                  Signup
                </NavLink>
              </ul>
            </div>
          </div>
        </nav>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>

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

        <section className="signup-section" id="signup">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8 mx-auto text-center">
                <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                <h2 className="text-white mb-5">
                  Subscribe to receive updates!
                </h2>
                <form className="form-inline d-flex">
                  <input
                    className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                    id="inputEmail"
                    type="email"
                    placeholder="Enter email address..."
                  />
                  <button className="btn btn-primary mx-auto" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section bg-black">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Address</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">
                      4923 Market Street, Orlando FL
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fas fa-envelope text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Email</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">
                      <a href="#!">keikibook-blog@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fas fa-mobile-alt text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Phone</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">+84 (555) 902-8832</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="social d-flex justify-content-center">
              <a className="mx-2" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="mx-2" href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="mx-2" href="#!">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>
      </Router>
    );
  }
}

export default Main;
