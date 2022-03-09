import React from 'react'
import {Navbar, Nav, Container, Col, Row, NavDropdown} from 'react-bootstrap';

export default function Header(){
    return(
        <>
        <Navbar id="nav" bg="light" expand="xxl" className="fixed-top">
    <Navbar.Brand href="#home" className="ms-4"><img src="https://i.ibb.co/hLQFWWq/logo.png" width="50vw"></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-4"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4" className="">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
</Navbar>
      </>
    )
}