import { useState, useEffect } from "react";
import img0 from "/c1.jpg";
import img1 from "/e3.jpg";
import img2 from "/pa2.jpg";
import img3 from "/d1.jpg";
import img4 from "/b1.jpg";
import img5 from "/a2.jpg";
import carLogo1 from "/honda.png";
import carLogo2 from "/mits.png";
import carLogo3 from "/niss.png";
import carLogo4 from "/sub.png";
import carLogo5 from "/toyo.png";
import logo from '/l.png'; 
import "../css/Hero.css";

const Hero = () => {
  const images = [img0, img1, img2, img3, img4, img5];
  const texts = [
    "PREMIUM CAR WASH",
    "ENGINE OVERHAUL",
    "PAINTWORK",
    "DETAILING",
    "BODYWORK",
    "DIAGNOSTIC SERVICES",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [preloadImage, setPreloadImage] = useState(new Image());

  useEffect(() => {
    // Set up image preloading for the next image
    preloadImage.src = images[(currentTextIndex + 1) % images.length];

    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentTextIndex, images]);

  return (
    <div className="hero-container">
      <div className="logo-container">
        <img src={logo} alt="Autopec Logo" className="hero-logo" loading="eager" />
      </div>

      <div className="content-container">
        <div className="image-section">
          <img
            src={images[currentTextIndex]}
            alt="Car"
            className="rotating-image"
            loading="lazy" // Lazy loading for all images except the first
          />
        </div>
        <div className="text-section">
          <p className="text-xl lg:text-2xl font-semibold text-black mb-4 md:mb-6">
            <span className="text-primary font-bold">
              {texts[currentTextIndex]}
            </span>
            .
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-primary">
            Welcome to Autopec
          </h1>

          <div className="car-logos-slider">
            <div className="logos-wrapper">
              {[carLogo1, carLogo2, carLogo3, carLogo4, carLogo5].map((logo, index) => (
                <img key={index} src={logo} alt={`Car Logo ${index + 1}`} className="car-logo" />
              ))}
              {[carLogo1, carLogo2].map((logo, index) => (
                <img key={`duplicate-${index}`} src={logo} alt={`Duplicate Car Logo ${index + 1}`} className="car-logo" />
              ))}
            </div>
          </div>

          <p className="alert-text text-lg lg:text-2xl font-medium text-primary">
            Your One-Stop Auto Shop!
          </p>
          <p className="text-sm lg:text-base text-black">
            At Autopec, we take pride in delivering exceptional automotive services that keep your vehicle running smoothly...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
