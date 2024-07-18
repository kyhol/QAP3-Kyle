import React from "react";
import "../App.css";
const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt="Dog" className="gallery-image" />
      ))}
    </div>
  );
};

export default ImageGallery;
