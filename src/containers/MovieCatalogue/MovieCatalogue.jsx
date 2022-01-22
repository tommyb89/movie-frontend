import React from "react";
import "./MovieCatalogue.scss";
import Nav from "../../components/Nav/Nav";
import Home from "../../pages/Home/Home";
import Form from "../../components/Form/Form";
import AllMovies from "../../pages/AllMovies/AllMovies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MovieCatalogue = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-movies" element={<AllMovies />} />
        <Route path="/add-movie" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default MovieCatalogue;
