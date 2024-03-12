
import "./NavBar.css";
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
};
