import React from "react";
import { FaDog } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>
          <FaDog />
          &nbsp; Dog API Image Gallery &nbsp;
          <FaDog />
        </h1>
      </div>
    </>
  );
};

export default Header;
