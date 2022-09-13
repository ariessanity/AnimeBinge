import React from "react";
import "../Styles/TrendingCard.scss";

function TrendingCard({ img, title, category, rating }) {
  return (
    <div className="trending-card">
      <img className="trending-card__img" src={img} />
      <h3 className="trending-card__title">{title}</h3>
      <h5 className="trending-card__category">{category}</h5>
      <h5 className="trending-card__rating">{rating}</h5>
    </div>
  );
}

export default TrendingCard;
