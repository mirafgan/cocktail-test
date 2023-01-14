import {Container, Nav, Navbar} from 'react-bootstrap';

function Menu() {
  return (
    <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand className="fs-2" href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;