import React from "react";
import { Link } from "react-scroll";
import "./Nav.css"
function Nav() {
  return (
    <nav className="nav">
      <button className="buttons">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Sobre mi
        </Link>
      </button>
      <button className="buttons">
        <Link
          to="experiencia"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          experiencia
        </Link>
      </button>
    </nav>
  );
}

export default Nav;
