// src/components/Header.js
import React from "react";
import { GiDogHouse } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerButtonWrapper">
        <button className="headerButton">
          <Link to="/">Home</Link> &nbsp;
          <GiDogHouse />
        </button>
        <button className="headerButton">
          <Link to="/about">About</Link>
        </button>
        <a
          href="https://dog.ceo/dog-api/"
          target="_blank"
          rel="noopener noreferrer" // Added noopener noreferrer for security
        >
          <button className="headerButton">Dog API</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
