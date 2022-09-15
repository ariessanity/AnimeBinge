import React from "react";
import "../Styles/ThrowbackCard.scss";

function ThrowbackCard({ img }) {
  return (
    <div className="throwback-card">
      <img className="throwback-card__img" src={img} />
    </div>
  );
}

export default ThrowbackCard;
