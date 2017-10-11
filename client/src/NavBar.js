import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import {
  Link
} from 'react-router-dom';


export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>Happy App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                {/*<Link className='nav-link' to='/'>Home</Link>*/}Home
              </NavItem>
              <NavItem>
                {/* <Link className='nav-link' to='/signup'>Sign Up</Link> */}Sign Up
              </NavItem>
              <NavItem>
                {/* <Link className='nav-link' to='/login'>Login</Link> */} Login
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    );
  }
}