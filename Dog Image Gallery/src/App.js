// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BreedSelector from "./components/BreedSelector";
import ImageGallery from "./components/ImageGallery";
import DogCarousel from "./components/DogCarousel";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [breed, setBreed] = useState("");
  const [numImages, setNumImages] = useState(1);
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    if (breed && numImages > 0) {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breed/${breed}/images/random/${numImages}`
        );
        const data = await response.json();
        setImages(data.message);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    }
  };

  useEffect(() => {
    fetchImages();
  }, [breed, numImages]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <BreedSelector setBreed={setBreed} setNumImages={setNumImages} />
              <ImageGallery images={images} />
              <Link to="/carousel">
                <button>View as Carousel</button>
              </Link>
            </div>
          }
        />
        <Route
          path="/carousel"
          element={<DogCarousel breed={breed} numImages={numImages} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
