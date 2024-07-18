import React, { useState, useEffect } from "react";
import BreedSelector from "./components/BreedSelector";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [breed, setBreed] = useState("");
  const [numImages, setNumImages] = useState(1);
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random/${numImages}`
    );
    const data = await response.json();
    setImages(data.message);
  };

  useEffect(() => {
    if (breed && numImages > 0) {
      fetchImages();
    }
  }, [breed, numImages]);

  return (
    <div>
      <Header />
      <BreedSelector setBreed={setBreed} setNumImages={setNumImages} />
      <ImageGallery images={images} />
      <Footer />
    </div>
  );
};

export default App;
