import {
  Navbar, Nav
} from "react-bootstrap";

function Navigation() {
  return (
    <Navbar
      bg="success"
      variant="dark"
      expand="lg"
      sticky="top"
      className="mb-5 py-3 px-lg-5 px-4"
    >
      <Navbar.Brand
        href="#home"
        className="mr-4"
      >
        <strong>Twitter Clone</strong>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse
        id="basic-navbar-nav"
      >
        <Nav className="ml-auto mt-3 mt-lg-0">
          <Nav.Link href="#">Profile</Nav.Link>
          <Nav.Link href="#">Notifications</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
