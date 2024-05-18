import React, { useState, useEffect } from 'react';
import {styled } from '@mui/material';

const ImageSlider = styled("img")({
    width: "76px",
    height: "76px",
    position: 'absolute',
    top: '28px',
    left:'12px'
  });

const Slider = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
    };
  
    // useEffect(() => {
    //   const intervalId = setInterval(nextSlide, 2000); 
  
    //   return () => clearInterval(intervalId); 
    // }, []);
    
// eslint-disable-next-line
  return (
    <div className="slider-container">
      <button
        style={{ border: "none", background: "none" }}
        className="prev-btn"
        onClick={prevSlide}
      >
        <ImageSlider src="Image/previous.svg" alt="slider" />
      </button>

      <div className="slider-content">{children[currentIndex]}</div>

      <button
      style={{ border: "none", background: "none" }}
      className="next-btn"
      onClick={nextSlide}
      >
        <ImageSlider src="Image/next.svg" alt="slider" />
      </button>
    </div>
  );
};

export default Slider;
