import React from "react";
import { FaDog } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="header">
        <span className="headerDog">
          <FaDog />
        </span>
        <h1>
          &nbsp;<span className="headerText">Dog API Image Gallery</span>&nbsp;
        </h1>
        <div className="headerButtonWrapper">
          <button className="headerButton">Home</button>
          <button className="headerButton">About</button>
          <a href="https://dog.ceo/dog-api/">
            <button className="headerButton">Dog API</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
