import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="nav">
      <li className="nav-link active">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link active">
          <Link to="/list">Lista</Link>
        </li>
        <li className="nav-link ">
          <Link to="/contact">Contacto</Link>
        </li>
        <li className="nav-link ">
          <Link to="/staff">Equipo</Link>
        </li>
        <li className="nav-link ">
          <Link to="/topic">Topic</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
