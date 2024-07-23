import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-links">
          <a
            href="https://github.com/ElliottLandsborough/dog-ceo-api"
            target="_blank"
            rel="noopener noreferrer" // Added noopener noreferrer for security
          >
            <p>
              &nbsp; View Dog API on Github <FaGithub /> &nbsp;
            </p>
          </a>
          <a
            href="https://x.com/dog__CEO"
            target="_blank"
            rel="noopener noreferrer" // Added noopener noreferrer for security
          >
            <p>
              &nbsp; Follow on Dog API Twitter <FaTwitter /> &nbsp;
            </p>
          </a>
        </div>
        <h3>Built with luv by Kyle Hollett &nbsp; &copy; 2024</h3>
      </div>
    </>
  );
};
export default Footer;
