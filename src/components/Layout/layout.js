import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout =({ pageTitle,children }) => {
    return(
        <div>
            <title>{pageTitle}</title>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">AP</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;