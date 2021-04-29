import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./header.css";

import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="navbar" light expand="md">
      <NavbarBrand>
        <a className="Link" href="https://www.urvar.in/">
          <img
            src="https://uploads-ssl.webflow.com/5fbe9c21fdc022ad4f3ec72f/5fbe9c5e15f877ae541781ff_Urvar%20Logo.png"
            loading="lazy"
            width="126.5"
            alt="Urvar Logo"
          />
        </a>
      </NavbarBrand>
      <NavbarToggler className="toggler" onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {
            <>
              <NavItem>
                <NavLink tag={Link} to="/Signup" className="text-white">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/Signin" className="text-white">
                  Supply
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/Signup" className="text-white">
                  Demand
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/Signin" className="text-white">
                  Certification
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/Signin" className="text-white">
                  Help
                </NavLink>
              </NavItem>
            </>
          }
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export default Header;
