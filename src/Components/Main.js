import React from "react";
import "../Styles/Main.scss";
import ThrowbackCard from "./ThrowbackCard";
import TrendingCard from "./TrendingCard";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";
import img3 from "../img/img3.png";
import img2 from "../img/img2.png";
import img1 from "../img/img1.png";
import img7 from "../img/img7.jpeg";

function Main() {
  return (
    <main className="main">
      <h2>
        Trending <span>this week</span>
      </h2>

      <div className="main__trending-card">
        <TrendingCard
          img={img6}
          title="Attack on Titan"
          category="Category: Adventure fiction, Dark fantasy, Martial Arts"
          rating="⭐5.0"
        />
        <TrendingCard
          img={img5}
          title="Jujutsu Kaisen"
          category="Category: Adventure fiction,  Martial Arts"
          rating="⭐5.0"
        />
        <TrendingCard
          img={img4}
          title="One Piece"
          category="Category: Adventure fiction, Comedy, Family"
          rating="⭐5.0"
        />
        <TrendingCard
          img={img7}
          title="One Punch Man"
          category="Category: Adventure fiction, Comedy"
          rating="⭐5.0"
        />
      </div>

      <h2>Throwback Anime!</h2>

      <div className="main__card-throwback">
        <ThrowbackCard img={img3} />
        <ThrowbackCard img={img2} />
        <ThrowbackCard img={img1} />
      </div>
    </main>
  );
}

export default Main;
