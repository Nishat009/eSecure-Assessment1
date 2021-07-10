import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Nav.css";
const Nav = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-center">Assessment Project</h1>
      <div class="nav-background ">
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className=" ">
            <Link to="/registration" className="nav-menu">
              USER REGISTRATION
            </Link>
            <Link to="/post" className="nav-menu">
              POSTS
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Nav;
