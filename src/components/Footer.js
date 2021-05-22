import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "black" }}
      >
        <div className=" py-5">
          <h2 className="text-light">Interested in working with me?</h2>
          <Link to="/contact">
            <button className="btn btn-outline-light btn-lg">Let's talk</button>
          </Link>
        </div>
        <div className="row ">
          <div className="col-12 col-md-4">
            <h5 className="text-info pb-3">More Links</h5>
            {/* <a href="/" className="text-light d-block">
              Blogs
            </a> */}
            <a href="/allprojects" className="text-light d-block">
              Projects
            </a>
            <Link to="/home" className="text-light d-block">
              Home
            </Link>
            <Link to="/contact" className="text-light d-block">
              Contact
            </Link>
            <Link to="/write-a-recommendation" className="text-light">
              Write a recommendation <i className="fas fa-heart text-light"></i>
            </Link>
          </div>
          <div className="col-12 col-md-4 text-light text-justify py-3">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
              ab quod nesciunt repellendus ratione consequatur similique vero.
              Aperiam praesentium, minus consequuntur sequi beatae dolores!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              alias voluptatem, magnam animi aut ea, fugit obcaecati, numquam
              dolores dicta id recusandae voluptatum doloremque?Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Cupiditate
            </p>
          </div>
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pb-3">Social</h5>
            <a href="/">
              <i className="fab fa-linkedin text-light h1 d-block"></i>
            </a>
            <a href="/">
              <i className="fab fa-github text-light h1 d-block"></i>
            </a>
            <a href="/">
              <i className="fas fa-envelope text-light h1 d-block"></i>
            </a>
          </div>
        </div>
        <div className="text-muted py-3">
          <p>Copyright © Harsha</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
