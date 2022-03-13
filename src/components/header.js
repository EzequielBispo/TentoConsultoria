import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

export default function Header(){
    return(
        <>
        <Navbar id="nav" bg="light" expand="xxl" className="fixed-top">
    <Navbar.Brand href="#home" className="ms-4"><img src="https://i.ibb.co/hLQFWWq/logo.png" width="50vw"></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-4"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#section1">Home</Nav.Link>
        <Nav.Link href="#section3">Sobre</Nav.Link>
        <Nav.Link href="#section2">Serviços</Nav.Link>
        <Nav.Link href="#section4">Contato</Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
      </>
    )
}