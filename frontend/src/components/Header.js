import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';
import '../index.css';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

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

            {userInfo ? (
              <NavDropdown
                title={`Hi, ${userInfo.name.split(' ')[0]}`}
                id='username'
              >
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user pr-2'></i>LOG IN
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
