import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { title, plot, director, genre, year, rating, imgSource } = props.movie;

  return (
    <div className="card">
      <img className="card__img" src={imgSource} alt="" />
      <div className="card__description">
        <h1 className="card__header">{title}</h1>
        <ul className="card__info">
          <li className="card__item">
            <span className="card__bold">Directed by: </span>
            {director}
          </li>
          <li className="card__item">
            <span className="card__bold">Release year: </span>
            {year}
          </li>
          <li className="card__item">
            <span className="card__bold">Genre: </span>
            {genre}
          </li>
        </ul>
        <p className="card__summary">
          SUMMARY <span className="card__summary--right">IMDb {rating}</span>
        </p>
        <p className="card__text">{plot}</p>
      </div>
    </div>
  );
};

export default Card;
