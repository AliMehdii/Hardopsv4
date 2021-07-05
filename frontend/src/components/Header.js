import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { Row, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import SearchBox from './SearchBox';

function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>

      <Navbar bg="light" >

        <LinkContainer className="mx-4" to='/'>
          <Navbar.Brand >HARDOPS</Navbar.Brand>
        </LinkContainer>

        <Row className="mx-4">
          <Navbar.Collapse >
            <Nav className='mr-auto'>
              <LinkContainer to='/store' className="px-3">
                <Nav.Link ><i className='fas fa-store'></i> PrintsStore </Nav.Link>
              </LinkContainer>
              {/*
              <LinkContainer to='/gallery'>
                <Nav.Link ><i class="fas fa-images"></i> Showcase</Nav.Link>
              </LinkContainer>
               */}

              <LinkContainer to='/blogs' className="px-2">
                <Nav.Link ><i class="fas fa-pen-fancy"></i> Blog </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/download' className="px-2">
                <Nav.Link > <i class="fas fa-download"></i> Download</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/courses' className="px-2">
                <Nav.Link > <i class="fas fa-graduation-cap"></i> Courses</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/cart' className="px-2">
                <Nav.Link > <i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/about' className="px-2">
                <Nav.Link ><i className="fas fa-eject"></i> about</Nav.Link>
              </LinkContainer>

              {
                userInfo ? (
                  <Row>
                    <NavDropdown variant="warning" className="" title={userInfo.name} id='username'>
                      <LinkContainer to='/profile'>
                        <NavDropdown.Item variant="warning" onHover={{ color: '#fff' }}>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                    </NavDropdown>

                  </Row>
                ) : (
                  <LinkContainer to="/login" >
                    <Nav.Link ><i class="fa fa-user" aria-hidden="true"></i> Login</Nav.Link>
                  </LinkContainer>
                )}
            </Nav>
          </Navbar.Collapse>
        </Row>
        <SearchBox />
      </Navbar>
    </header>
  )
}

export default Header