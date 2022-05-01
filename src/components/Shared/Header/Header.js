import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import logo from '../../../images/logos/logo.png'
import plus from '../../../images/logos/plus 1.png'
import product from '../../../images/logos/product.png'

const Header = () => {
  const [user] = useAuthState(auth); 
  const navigate = useNavigate(); 

  const handleSignOut = () =>{
    navigate('/login'); 
    signOut(auth); 
      
  }
  return (
    <div className='mb-3'>
      <Navbar bg="light" expand="lg" >
        <Container>
          <Navbar.Brand className='text-danger fw-bold' style={{fontSize:'25px'}} as={Link} to="/">
            {/* <img style={{height: '50px'}} src={logo} alt="" /> */}
            <span className='text-secondary'>Electric</span> Warehouse
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/product"><img className='mb-1 me-1' style={{width:'20px'}} src={product} alt="" />Products</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              {/* <Nav.Link as={Link} to="/blogs">About</Nav.Link> */}
            </Nav>
            <Nav>
              {
                user && <>
                  <Nav.Link as={Link} to="/manageitem">Manage Items</Nav.Link>
                  <Nav.Link as={Link} to="/additem"><img className='mb-1' style={{width:'20px'}} src={plus} alt="" /> Add Item</Nav.Link>
                  <Nav.Link as={Link} to="/myitems">My items</Nav.Link>
                </>
              }
              {
                user? 
                  <Nav.Link as={Link} className="btn btn-primary text-white" id='custom-btn' onClick={handleSignOut} to="/login">Logout</Nav.Link>
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