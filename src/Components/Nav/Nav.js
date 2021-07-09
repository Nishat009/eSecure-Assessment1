import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Nav.css';
const Nav = () => {
    return (
        <div className="container-fluid">
        <h1 className="text-center">Assessment Project</h1>
        <div class="nav-background ">
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className=" ">
                    <a href="/registration" className="nav-menu">USER REGISTRATION</a>
                    <a href="/post" className="nav-menu">POSTS</a>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </div>

    );
};

export default Nav;