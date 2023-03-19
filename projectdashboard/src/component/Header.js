import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'

const Header = ()=> {
  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
          <LinkContainer to='/' activeClassName>
            <Nav.Link to="/">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/signin'>
            <Nav.Link to="/signin">Login !</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;