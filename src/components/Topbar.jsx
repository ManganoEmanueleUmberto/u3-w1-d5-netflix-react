import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";

const Topbar = () => {
  return (
    <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
      <Container fluid className="mx-5">
        <Navbar.Brand href="#home">
          <img src="../assets/netflix_logo.png" width="100" height="40" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav d-flex">
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#" className="active">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <div className="d-flex align-items-center ">
              <Dropdown data-bs-theme="dark">
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  <img src="./assets/avatar.png" width="30" height="30" alt="user-img" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Profile</Dropdown.Item>
                  <Dropdown.Item href="#">Settings</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex align-items-center gap-1 ">
              <Nav.Link href="#">
                <i className="bi bi-search"></i>
              </Nav.Link>
              <Nav.Link href="#">
                <span>KIDS</span>
              </Nav.Link>
              <Nav.Link href="#">
                <i className="bi bi-bell-fill"></i>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
