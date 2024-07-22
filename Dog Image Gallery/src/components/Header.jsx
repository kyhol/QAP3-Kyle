import React from "react";
import { FaDog } from "react-icons/fa";
import { GiDogHouse } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerButtonWrapper">
          <button className="headerButton">
            Home &nbsp;
            <GiDogHouse />
          </button>
          <button className="headerButton">About</button>
          <a href="https://dog.ceo/dog-api/" target="blank">
            <button className="headerButton">Dog API</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
