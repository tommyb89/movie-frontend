import React, { useState, useEffect } from "react";
import "./MovieCatalogue.scss";
import Nav from "../../components/Nav/Nav";
import Home from "../../pages/Home/Home";
import Form from "../../components/Form/Form";
import AllMovies from "../../pages/AllMovies/AllMovies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MovieCatalogue = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch("http://localhost:8080/movies")
      .then((res) => res.json())
      .then((json) => setMovies(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovies();
  }, [movies]);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<AllMovies movies={movies} />} />
        <Route path="/add-movie" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default MovieCatalogue;
