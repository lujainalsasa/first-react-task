import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";

const BlogNav = () => {
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "blue",
        }}
      >
        <Nav>
          <Nav.Link href="#home" style={{ color: "white" }}>
            Home
          </Nav.Link>
          <Nav.Link href="#about" style={{ color: "white" }}>
            About
          </Nav.Link>
          <Nav.Link href="#contact" style={{ color: "white" }}>
            Contact
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="ml-auto" />
        </Form>
      </Navbar>
    </div>
  );
};

export default BlogNav;
