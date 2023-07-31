import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.css";
import Redes from "../Redes/Redes";
import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="#home">
          <div className={styles.imgContainer}>
            <Redes />
          </div>
        </Navbar.Brand>
  
             
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"  >
      
          <Nav className={styles.hability}>

            <Nav.Link className={styles.text} href="https://portfolio-sage-eight-71.vercel.app/developer">
              About me
            </Nav.Link>
          <Nav.Link className={styles.text} href="#portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link className={styles.text} href="#skill">
              Skill Set
            </Nav.Link>
          <Nav>
            <Nav.Link className={styles.text} href="#contact">
              Contact
            </Nav.Link>
          </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;


