import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/cartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar className="Navbar">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>Inicio</Nav.Link>
            <Nav.Link to="/category/Vestidos" as={NavLink}>Vestidos</Nav.Link>
            <Nav.Link to="/category/Remeras" as={NavLink}>Remeras</Nav.Link>
            <Nav.Link to="/category/Pantalones" as={NavLink}>Pantalones</Nav.Link>
            <Nav.Link to="/category/Zapatillas" as={NavLink}>Zapatillas</Nav.Link>
            <Nav.Link to="/category/Accesorios" as={NavLink}>Accesorios</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;



















/*import "./NavBar.css";
import CartWidget from "../CartWidget/cartWidget";

export const NavBar = () => {
  return (
    <nav className='NavBar'>
        <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Catalogo</a>
            </li>
            <li>
              <a href="#">Amorcitos</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
           <li>
            <CartWidget/>
            </li> 
        </ul>
    </nav>
  );
};*/
