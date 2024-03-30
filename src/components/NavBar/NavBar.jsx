import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
        <Navbar className='NavbarStyle'>
        <div className='container'>
          <h3 className='logo'>React-Website</h3>
          <div className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </div>
        </div>
      </Navbar>
    </div>
  )
}

export default NavBar