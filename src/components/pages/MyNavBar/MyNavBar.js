import React from 'react';

import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import firebase from 'firebase/app';
import 'firebase/auth';

// import Footer from '../Footer/Footer';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  state= {
    isOpen: false,
  }

  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const buildNavbar = () => {
      const { authed } = this.props;

      if (authed) {
        return (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/landing">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/dates">Dates</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/new">Create</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/Contact">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
                  <NavLink tag={RRNavLink} to="/dateGen">Date Gen</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.logMeOut}>Log Out</NavLink>
            </NavItem>
        </Nav>

        );
      }

      return <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/Contact">Contact Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/dateGen">Contact Us</NavLink>
                </NavItem>
                <button className=" login btn btn-info" onClick={this.loginClickEvent}>Google login</button>
              </Nav>;
    };

    return (
      <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">qortr.</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          { buildNavbar() }
        </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
