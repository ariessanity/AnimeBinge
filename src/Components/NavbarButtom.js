import React from "react";
import "../Styles/NavbarButtom.scss";

function NavbarButtom() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <a href="#">Overview</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">Episodes</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">Details</a>
        </li>
      </ul>

      <h1></h1>
    </nav>
  );
}

export default NavbarButtom;
