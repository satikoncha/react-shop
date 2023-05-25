import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navpannel = () => {
    const cartProducts = useSelector(state => state.cart);
  return (
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">React ToolKit</Navbar.Brand>
          <Nav>
            <Nav.Link to='/' as={Link}>Home</Nav.Link>
            <Nav.Link to="/cart" as={Link}>Cart</Nav.Link>
          </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Navbar.Text className="justify-content-end">
              <Nav.Link to='/cart' as={Link}>My cart {cartProducts.length}</Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navpannel
