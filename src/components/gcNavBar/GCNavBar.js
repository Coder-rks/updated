import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Glyphicon
} from "react-bootstrap";
import { Route, NavLink, HashRouter, Link } from "react-router-dom";
import Home from "../home/Home";
import Account from "../account/Account";
import Messages from "../messages/Messages";
import Welcome from "../welcome/Welcome";
import Benefits from "../benefits/Benefits";

import "./gcNavBar.css";

class GCNavbar extends Component {

  render() {
    return (
      <div>
        <Navbar collapseOnSelect className="gcNavBar">
          <Navbar.Header className="gcNavHeader">
            <Glyphicon glyph="user" className="gcUserIcon gcWhite" />
            <Navbar.Brand>
              <Link to="/" className="gcWhite">
                <img src={'/images/a-icon@2x.png'}  style={{ height: "55px", width: "70px" }}/>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem>
                <NavLink to="/home" className="gcWhite">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/messages" className="gcWhite">Messages</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/account" className="gcWhite">Account</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/benefits" className="gcWhite">Benefits</NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default GCNavbar;
