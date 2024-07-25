// NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({ onSearch, showSearch, cartTotal = 0, cartItems = [], removeFromCart }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);

    const secondSectionElement = document.getElementById('second-section');
    if (secondSectionElement) {
      secondSectionElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  return (
    <Navbar expand="lg" className="navbar navbar-fixed">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="nav me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/" className='mt-2'>Home</Nav.Link>
            <Nav.Link as={Link} to="/info" className='mt-2'>Chi Siamo</Nav.Link>
            <Nav.Link as={Link} to="/cart" className='carrello mt-2'>
              <span className='spancarrello'>Carrello: €{cartTotal.toFixed(2)}</span>
            </Nav.Link>
            <h1 className='h1'>Wine Emporium</h1>
          </Nav>
          {showSearch && (
            <Form className="d-flex" onSubmit={handleSearchSubmit}>
              <Form.Control
                type="search"
                placeholder="Che vino cerchi?"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Button variant="outline-success" type="submit">Cerca</Button>
            </Form>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
