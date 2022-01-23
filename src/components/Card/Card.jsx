import React from "react";
import "./Card.scss";
import poster from "../../assets/images/matrix.jpg";

const Card = (props) => {
  const { title, plot, director, genre, releaseYear, rating } = props.movie;

  return (
    <div className="card">
      <img className="card__img" src={poster} alt="" />
      <h2 className="card__header">{title}</h2>
      <table className="card__data">
        <td className="card__data__col">{genre} | </td>
        <td className="card__data__col">IMDb: {rating} | </td>
        <td className="card__data__col">{releaseYear}</td>
      </table>
      <div className="card__summary">
        <p className="card__director">Directed by: {director}</p>
        <span className="card__span">Summary</span>
        <p className="card__text">{plot}</p>
      </div>
    </div>
  );
};

export default Card;
