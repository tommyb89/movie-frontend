import React from "react";
import "./Nav.scss";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={Logo} alt="logo" className="nav__logo" />
      </Link>

      <ul className="nav__menu">
        <li>
          <Link className="nav__link" to="/Home">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav__link" to="/add-movie">
            Add Movie
          </Link>
        </li>
      </ul>
      <div className="nav__dropdown"></div>
      <Search />
    </nav>
  );
};

export default Nav;
