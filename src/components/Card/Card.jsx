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
            <span className="card__bold"> Directed by:</span> {director}
          </li>
          <li className="card__item">
            Release year: <span className="card__bold"> {year}</span>
          </li>
          <li className="card__item">
            Genre: <span className="card__bold">{genre}</span>
          </li>
        </ul>
        <p className="card__summary">
          Summary <span>IMDb {rating}</span>
        </p>
        <p className="card__text">{plot}</p>
      </div>
    </div>
  );
};

export default Card;
