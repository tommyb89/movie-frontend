import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/popcornbw.png";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={Logo} alt="logo" className="nav__logo" />
      </Link>

      <ul className="nav__menu">
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav__link" to="/browse-movies">
            Movies
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/add-movie">
            Add Movie
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
