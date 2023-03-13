import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarBot.css";
const NavbarBot = () => {
  return (
    <div>
      <div className="container">
        <img
          className="img-navbar"
          src="https://i.pinimg.com/564x/6e/c8/a3/6ec8a302b5f95d62442377902bbb9b04.jpg"
          alt=""
        />

        <div className="container-block">
          <Link className="link-navbar" to="/">
            <h3 className="container-list" href="#home">
              Home
            </h3>
          </Link>
        </div>
        <div className="container-block">
          <Link className="link-navbar" to="/add-product">
            <h3 className="container-list" href="#features">
              Add contact
            </h3>
          </Link>
        </div>
        <div className="container-block">
          <Link className="link-navbar" to="/contacts">
            <h3 className="container-list" href="#pricing">
              Contact
            </h3>
          </Link>
        </div>
        <div className="container-block">
          <Link className="link-navbar" to="/favorites">
            <h3 className="container-list" href="#pricing">
              Favorites
            </h3>
          </Link>
        </div>
        <div className="container-block">
          <Link className="link-navbar" to="/about-us">
            <h3 className="container-list" href="#pricing">
              About Us
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarBot;
