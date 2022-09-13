import React from "react";
import "../Styles/Header.scss";
import ButtonDark from "./ButtonDark";
import ButtonLight from "./ButtonLight";
import Navbar from "./Navbar";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavbarButtom from "./NavbarButtom";

function Header() {
  return (
    <header className="header">
      <Navbar />
      <div className="header__text">
        <h1>Kimetsu no Yaiba</h1>

        <h5>
          <strong>⭐5.0 </strong> Category: Adventure fiction, Dark fantasy,
          Martial Arts
        </h5>

        <p>
          Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and
          illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado,
          who strives to become a demon slayer after his family was slaughtered
          and his younger sister Nezuko turned into a demon.
        </p>

        <div className="header__text-btn">
          <ButtonDark>
            <a href="">
              <PlayArrowIcon />
              Watch Now!
            </a>
          </ButtonDark>
          <ButtonLight>
            <a href="">
              <FavoriteIcon />
            </a>
          </ButtonLight>
        </div>
      </div>
      <NavbarButtom />
    </header>
  );
}

export default Header;
