import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/mayra-web-app">
          Mayra Maldonado Brignoni
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/mayra-web-app">Inicio</Nav.Link>
            <Nav.Link href="/mayra-web-app/SobreMi">Trayectoria</Nav.Link>
            <Nav.Link href="/mayra-web-app/QueOfrecemos">
              Ofrecimientos
            </Nav.Link>
            <Nav.Link href="/mayra-web-app/MiLibro">Libros</Nav.Link>
            <Nav.Link href="/mayra-web-app/Podcast">Podcast</Nav.Link>
            <NavDropdown title="Mas" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Contactos">Contactos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Noticias">Noticias</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
