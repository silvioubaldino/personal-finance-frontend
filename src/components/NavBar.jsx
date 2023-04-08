import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BiWallet } from 'react-icons/bi';
// import PropTypes from 'prop-types'

function NavBar(props) {
  return (
    <Navbar style={{ background: '#FF0A58', color: '#8F002D' }} expand="lg">
      <Navbar.Brand href="#home" style={{ marginLeft: '20px', color: '#7A0027', fontSize: '22px', fontWeight: 'bold' }}>Personal Finance</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="mr-auto" style={{ color: '#8F002D', fontSize: '19px' }}>
          <Nav.Link href="#home" style={{ color: '#8F002D', fontSize: '19px' }}>Home</Nav.Link>
          <Nav.Link href="#link" style={{ color: '#8F002D', fontSize: '19px' }}>Reports</Nav.Link>
          <NavDropdown title="Wallets" id="basic-nav-dropdown">
            <NavDropdown.Item href="#wallet/1"> <BiWallet /> Wallet 1</NavDropdown.Item>
            <NavDropdown.Item href="#wallet/2"> <BiWallet /> Wallet 2</NavDropdown.Item>
            <NavDropdown.Item href="#wallet/3"> <BiWallet /> Wallet 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#wallet" className='text-center'>
              Manager Wallets
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <h6 style={{ marginRight: '20px' }}>Username</h6>
    </Navbar>
  )
}

NavBar.propTypes = {}

export default NavBar
