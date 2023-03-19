import { useState, useEffect } from "react"
import { Row, Col, Dropdown } from "react-bootstrap"
import { Container , Nav , Navbar ,NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Project from "./Project"
const Home = (props) => {
    const logout =()=>{
        console.log("logout")
    }

    return (
        <>
            {/* sidebar */}
            <Container>
                <Navbar bg="light">
                    <Container >
                        <Navbar.Brand >{"Name"}</Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                            <NavDropdown title="filter" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Action</NavDropdown.Item>
                            <NavDropdown.Item href="">Action</NavDropdown.Item>
                            <NavDropdown.Item href="">Action</NavDropdown.Item>

                            </NavDropdown>
                            <Nav >
                               
                                <LinkContainer to='' onClick={logout}>
                                    <Nav.Link >Logout</Nav.Link>
                                </LinkContainer>
                            </Nav>
                            
                        {/* </Navbar.Collapse> */}
                    </Container>
                </Navbar>
            </Container>
            {/* right side top */}

            <Container>
                <Project/>
            </Container>

            {/* projects todo list */}
        </>
    )
}
export default Home