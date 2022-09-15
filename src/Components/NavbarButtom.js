import React from "react";
import "../Styles/NavbarButtom.scss";

function NavbarButtom() {
  return (
    <div className="header-footer">
      <ul className="header-footer__list">
        <li className="header-footer__list--item">
          <a href="#">Overview</a>
        </li>
        <li className="header-footer__list--item">
          <a href="#">Episodes</a>
        </li>
        <li className="header-footer__list--item">
          <a href="#">Details</a>
        </li>
      </ul>

      <h1></h1>
    </div>
  );
}

export default NavbarButtom;
