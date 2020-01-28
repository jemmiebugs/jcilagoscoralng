import React, { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../components/image/logo.png";

const Navbarr = () => {
  const style = {
    color: "blue",
    textDecorationStyle: "none",
    marginRight: "35px",
    marginTop: "5px",
    fontWeight: "bold"
  };

  return (
    <Fragment>
      <Navbar bg="white" variant="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">
          <Link to="/" style={style}>
            <img src={logo} alt=" " width="100" height="50" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="link" to="/about" style={style}>
              ABOUT
            </Link>
            <Link to="/news" style={style}>
              NEWS
            </Link>

            <Link to="/event" style={style}>
              EVENT
            </Link>
            <Link to="/projects" style={style}>
              PROJECTS
            </Link>
            <Link to="/connect" style={style}>
              CONNECT
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Navbarr;
