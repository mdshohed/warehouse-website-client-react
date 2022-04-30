import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import logo from '../../../images/logos/logo.png'
import plus from '../../../images/logos/plus 1.png'

const Header = () => {
  const [user] = useAuthState(auth); 

  const handleSignOut = () =>{
    signOut(auth); 
  }
  return (
    <div className='mb-3'>
      <Navbar bg="secondary" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img style={{height: '50px'}} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/product">Products</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            </Nav>
            <Nav>
              {
                user? 
                  <>
                    <Nav.Link as={Link} to="/manageitem">Manage Items</Nav.Link>
                    <Nav.Link as={Link} to="/additem"><img className='mb-1 ms-2' style={{width:'20px'}} src={plus} alt="" /> Add Item</Nav.Link>
                    <Nav.Link as={Link} to="/myitems">My items</Nav.Link>
                    <Nav.Link as={Link} className="btn btn-primary text-white" onClick={handleSignOut} to="/">Logout</Nav.Link>
                  {/* <p className='me-3 mt-2 border p-2'>{user?.displayName}</p> */}
                  </>
                  :
                  <>
                    <Nav.Link as={Link} to="/register">Registration</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;