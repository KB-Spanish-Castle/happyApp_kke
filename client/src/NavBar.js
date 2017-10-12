import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
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
    let faves = this.props.user.name !== "" ? (
      <NavItem>
        <Link className='nav-link' to='/favorites'>{this.props.user.name}'s Favorites</Link>
      </NavItem>
    ) : null;

    return (
      <Container>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>Happy App</NavbarBrand>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <Link className='nav-link' to='/'>Home</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/signup'>Sign Up</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/login'>Login</Link>
            </NavItem>
            {faves}
          </Nav>
        </Navbar>

      </Container >
    );
  }
}