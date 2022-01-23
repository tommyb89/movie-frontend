import React from "react";
import "./Card.scss";
import poster from "../../assets/images/matrix.jpg";

const Card = (props) => {
  const { title, plot, director, genre, year, rating } = props.movie;

  return (
    <div className="card">
      <img className="card__img" src={poster} alt="" />
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

        <button>remove</button>
      </div>
    </div>
  );
};

export default Card;
