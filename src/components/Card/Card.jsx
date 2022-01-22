import React from "react";
import "./Card.scss";
import poster from "../../assets/images/matrix.jpg";

const Card = () => {
  return (
    <div className="card">
      <img className="card__img" src={poster} alt="" />
      <h2 className="card__header">The Matrix</h2>
      <table className="card__data">
        <td className="card__data__col">Sci-Fi | </td>
        <td className="card__data__col">9.2 IMDB | </td>
        <td className="card__data__col">2022</td>
      </table>
      <div className="card__summary">
        <p className="card__director">Director: Sam Mendez </p>
        <p className="card__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
          itaque quis aliquid sit dolores debitis corporis unde molestias earum.
          Aliquid recusandae autem consectetur, distinctio minus neque
          architecto facere molestiae fugiat.
        </p>
      </div>
    </div>
  );
};

export default Card;
