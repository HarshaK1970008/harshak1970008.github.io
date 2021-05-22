import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm fixed-top bg-white">
      <div className="container my-2">
        <Link to="/home" className="navbar-brand text-dark font-weight-bold">
          Harsha Kumari
        </Link>
        <Link to="/contact" className="mx-3 ml-auto">
          <button className="btn btn-outline-info ">Contact Me</button>
        </Link>

        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav"
        >
          <span className="fas fa-bars text-dark"></span>
        </button>
        <div className=" collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav">
            {/* <a href="/" className="nav-item nav-link text-dark font-weight-bold mx-1 my-auto">
                        Blogs
                    </a> */}
            <Link
              to="/allprojects"
              className="nav-item nav-link text-dark font-weight-bold mx-1 my-auto"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
