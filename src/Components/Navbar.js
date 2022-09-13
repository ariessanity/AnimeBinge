import React from "react";
import "../Styles/Navbar.scss";
import ButtonDark from "./ButtonDark";
import ButtonLight from "./ButtonLight";

function Navbar() {
  return (
    <nav>
      <h1>AnimeBinge</h1>

      <div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Discover</a>
          </li>
          <li>
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
