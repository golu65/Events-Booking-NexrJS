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
    const [showButtons, setShowButtons] = useState(true);
  
    const nextSlide = () => {
      if (Array.isArray(children)) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
      }
    };
  
    const prevSlide = () => {
      if (Array.isArray(children)) {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
      }
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (Array.isArray(children)) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
        }
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, [children]);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 767) {
          setShowButtons(false);
        } else {
          setShowButtons(true);
        }
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <div className="slider-container">
        {showButtons && (
          <button style={{ border: 'none', background: 'none' }} className="prev-btn" onClick={prevSlide}>
            {/* <ImageSlider src="Image/previous.svg" alt="slider" /> */}
          </button>
        )}
  
        {Array.isArray(children) && children.length > 0 && (
          <div className="slider-content">{children[currentIndex]}</div>
        )}
  
        {showButtons && (
          <button
            style={{ border: 'none', background: 'none' }}
            className="next-btn"
            onClick={nextSlide}
          >
            {/* <ImageSlider src="Image/next.svg" alt="slider" /> */}
          </button>
        )}
      </div>
    );
  };
  
  export default Slider;

