import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
const About = () => {
  const [showInfo, setShowInfo] = useState({
    header: false,
    imageGallery: false,
    breedSelector: false,
    dogCarousel: false,
    footer: false,
    about: false,
    packages: false,
  });

  const toggleInfo = (section) => {
    setShowInfo((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="aboutPageWrapper">
      <h1>
        Header{" "}
        <span onClick={() => toggleInfo("header")} className="dropDownArrow">
          <IoIosArrowDropdown />
        </span>
      </h1>
      {showInfo.header && <p>Header Info</p>}

      <h1>
        Image Gallery{" "}
        <span
          className="dropDownArrow"
          onClick={() => toggleInfo("imageGallery")}
        >
          <IoIosArrowDropdown />
        </span>
      </h1>
      {showInfo.imageGallery && <p>Image Gallery info</p>}

      <h1>
        Breed Selector{" "}
        <span
          className="dropDownArrow"
          onClick={() => toggleInfo("breedSelector")}
        >
          <IoIosArrowDropdown />
        </span>
      </h1>
      {showInfo.breedSelector && <p>Breed Selector Info</p>}

      <h1>
        Dog Carousel{" "}
        <span
          className="dropDownArrow"
          onClick={() => toggleInfo("dogCarousel")}
        >
          <IoIosArrowDropdown />
        </span>
      </h1>
      {showInfo.dogCarousel && <p>Dog Carousel Info</p>}

      <h1>
        Footer{" "}
        <span className="dropDownArrow" onClick={() => toggleInfo("footer")}>
          <IoIosArrowDropdown />
        </span>
      </h1>
      {showInfo.footer && <p>Footer info</p>}

      <h1>
        About{" "}
        <span className="dropDownArrow" onClick={() => toggleInfo("about")}>
          <IoIosArrowDropdown />
        </span>
      </h1>
      {showInfo.about && <p>About info</p>}
      <h1>
        Installed Packages{" "}
        <span className="dropDownArrow" onClick={() => toggleInfo("packages")}>
          <IoIosArrowDropdown />
        </span>
      </h1>
      {showInfo.packages && <p>Installed packages info</p>}
    </div>
  );
};

export default About;
