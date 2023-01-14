import {Container, Nav, Navbar} from 'react-bootstrap';

function Menu() {
  return (
    <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand className="fs-2" href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">nese</Nav.Link>
            <Nav.Link href="#pricing">qiymet</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Daha çox</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;