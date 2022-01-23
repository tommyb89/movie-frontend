import React from "react";
import Card from "../../components/Card/Card";
import "./AllMovies.scss";

const AllMovies = (props) => {
  const { movies } = props;

  return (
    <div>
      <h1 className="heading">browse all movies</h1>

      <div className="container">
        {movies && movies.map((movie) => <Card key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default AllMovies;
