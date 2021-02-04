import React, { Component } from "react";
import Login from "../login";
import Signup from "../signup";
import { NavLink, BrowserRouter as Router, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Router>
        <nav
          class="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
              keikibook-blog
            </a>
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"    
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <NavLink
                  className="nav-item"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "black",
                  }}
                  to="/login"
                >
                  Login
                </NavLink>&nbsp;&nbsp;&nbsp;
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

        <header class="masthead">
          <div class="container d-flex h-100 align-items-center">
            <div class="mx-auto text-center">
              <h1 class="mx-auto my-0 text-uppercase">Grayscale</h1>
              <h2 class="text-white-50 mx-auto mt-2 mb-5">
                A free, responsive, one page Bootstrap theme created by Start
                Bootstrap.
              </h2>
              <a class="btn btn-primary js-scroll-trigger" href="#about">
                Get Started
              </a>
            </div>
          </div>
        </header>

        <section class="signup-section" id="signup">
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-lg-8 mx-auto text-center">
                <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                <h2 class="text-white mb-5">Subscribe to receive updates!</h2>
                <form class="form-inline d-flex">
                  <input
                    class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                    id="inputEmail"
                    type="email"
                    placeholder="Enter email address..."
                  />
                  <button class="btn btn-primary mx-auto" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section class="contact-section bg-black">
          <div class="container">
            <div class="row">
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                    <h4 class="text-uppercase m-0">Address</h4>
                    <hr class="my-4" />
                    <div class="small text-black-50">
                      4923 Market Street, Orlando FL
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <i class="fas fa-envelope text-primary mb-2"></i>
                    <h4 class="text-uppercase m-0">Email</h4>
                    <hr class="my-4" />
                    <div class="small text-black-50">
                      <a href="#!">keikibook-blog@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <i class="fas fa-mobile-alt text-primary mb-2"></i>
                    <h4 class="text-uppercase m-0">Phone</h4>
                    <hr class="my-4" />
                    <div class="small text-black-50">+84 (555) 902-8832</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="social d-flex justify-content-center">
              <a class="mx-2" href="#!">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="mx-2" href="#!">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="mx-2" href="#!">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>
      </Router>
    );
  }
}

export default Main;
