import React from "react";
import Card from "../../components/Card/Card";
import "./AllMovies.scss";

const AllMovies = (props) => {
  return (
    <section className="movies">
      <h1 className="movies__heading">Browse all movies</h1>
      <div className="movies__container">
        {props.movies &&
          props.movies.map((movie) => <Card key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
};

export default AllMovies;
