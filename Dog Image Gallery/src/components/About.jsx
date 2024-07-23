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
    app: false,
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
        App.js{" "}
        <span className="dropDownArrow" onClick={() => toggleInfo("app")}>
          <IoIosArrowDropdown />
        </span>
      </h1>
      {showInfo.app && <p>App.js info</p>}
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
      {showInfo.packages && (
        <p>
          <h2>Installed packages info:</h2>
          <p>
            To install these packages, you can use the following commands:
            <br />
            <code>
              `npm install react` | To run after installing use `npm start`
            </code>
            <br />
            <code>`npm install react-image-carousel`</code>
            <br />
            <code>`npm install react-router-dom`</code>
            <br />
            <code>`npm install react-icons`</code>
            <br />
            <code>`npm install react-font-poppins`</code>
          </p>
          <br />
          <h2>React:</h2>
          <p>
            React is a JavaScript library for building user interfaces. It
            allows developers to create reusable UI components and manage the
            state of their applications efficiently.
          </p>
          <br />
          <h2>React-image-carousel:</h2>
          <p>
            React-image-carousel is a component for creating image carousels in
            React applications. It provides an easy way to add a slideshow of
            images with various customization options.
          </p>
          <br />
          <h2>React-router-dom:</h2>
          <p>
            React-router-dom is a routing library for React applications. It
            enables the creation of single-page applications with dynamic
            routing, allowing for navigation between different views without a
            full page reload.
          </p>
          <br />
          <h2>React-icons:</h2>
          <p>
            React-icons is a library that provides a set of popular icons as
            React components. It includes icons from various icon libraries like
            Font Awesome, Material Design, and more, making it easy to use icons
            in your React projects.
          </p>
          <br />
          <h2>React-font-poppins:</h2>
          <p>
            React-font-poppins is a package that allows you to easily include
            the Poppins font in your React application. It simplifies the
            process of adding custom fonts to your project.
          </p>
        </p>
      )}
    </div>
  );
};

export default About;
