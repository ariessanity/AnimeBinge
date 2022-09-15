import React, { useState } from "react";
import "../Styles/Navbar.scss";
import ButtonDark from "./ButtonDark";
import ButtonLight from "./ButtonLight";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <nav className="nav">
      <h1 className="nav__title">AnimeBinge</h1>
      <button className="nav__toggler" onClick={menuToggler}>
        {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
      </button>

      <div
        className={`${"nav__content"} ${menuOpen ? [`nav__content-open`] : {}}`}
      >
        <ul className="nav__content-list">
          <li className="nav__content-list--item">
            <a href="#">Home</a>
          </li>
          <li className="nav__content-list--item">
            <a href="#">Discover</a>
          </li>
          <li className="nav__content-list--item">
            <a href="#">About Us</a>
          </li>
        </ul>

        <ButtonLight>Sign Up</ButtonLight>
        <ButtonDark>Log In</ButtonDark>
      </div>
    </nav>
  );
}

export default Navbar;
