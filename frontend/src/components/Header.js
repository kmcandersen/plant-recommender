import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import '../index.css';

const Header = () => {
  return (
    <header>
      <Navbar expand='md' fixed='top' className='px-5 py-3'>
        <LinkContainer to='/'>
          <Navbar.Brand>
            perennial candidates<i className='fab fa-envira pr-1'></i>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <LinkContainer to='/search'>
              <Nav.Link>
                <i className='fas fa-search pr-2'></i>SEARCH
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/signin'>
              <Nav.Link>
                <i className='fas fa-user pr-2'></i>SIGN IN
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
