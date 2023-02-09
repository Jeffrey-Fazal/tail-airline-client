import React, { Component } from 'react';
// import FlightsTable from '../../common/FlightsTable';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class NavbarBootStrap extends React.Component {
    render() {
        return (
        <div>   
            <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Burning Airline</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/search">Search</Nav.Link>
                    <Nav.Link href="/planes">Planes</Nav.Link>
                    <Nav.Link href="/flights">Flights</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Container>
        <div id="head"></div>
        </Navbar>
        </div>
        )

    }
}

export default NavbarBootStrap;