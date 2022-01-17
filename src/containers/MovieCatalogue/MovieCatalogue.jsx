import React from "react";
import "./MovieCatalogue.scss";
import Nav from "../../components/Nav/Nav";
import Home from "../../components/Home/Home";
import Form from "../../components/Form/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MovieCatalogue = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-movie" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default MovieCatalogue;
