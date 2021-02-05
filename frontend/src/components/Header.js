import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../index.css';

const Header = () => {
  return (
    <header>
      <Navbar expand='md' fixed='top' className='px-5 py-3'>
        <Navbar.Brand href='/'>
          perennial candidates<i class='fab fa-envira pr-1'></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/search'>
              <i className='fas fa-search pr-2'></i>SEARCH
            </Nav.Link>
            <Nav.Link href='/signin'>
              <i className='fas fa-user pr-2'></i>SIGN IN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
