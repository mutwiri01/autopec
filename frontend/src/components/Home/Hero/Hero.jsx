import { useState, useEffect } from "react";
import img0 from "../../../assets/img/c1.jpg";
import img1 from "../../../assets/e1.jpg";
import img2 from "../../../assets/p1.jpg";
import img3 from "../../../assets/d1.jpg";
import img4 from "../../../assets/b1.jpg";
import img5 from "../../../assets/img/a2.jpg";
import carLogo1 from "/honda.png"; // example car logos
import carLogo2 from "/mits.png";
import carLogo3 from "/niss.png";
import carLogo4 from "/sub.png"; // example car logos
import carLogo5 from "/toyo.png";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="hero-container">
      <div className="content-container">
        <div className="image-section">
          <img
            src={images[currentTextIndex]}
            alt="Car"
            className="rotating-image"
          />
        </div>
        <div className="text-section">
          <p className="text-xl lg:text-2xl font-semibold text-black mb-4 md:mb-6">
            {" "}
            <span className="text-primary font-bold">
              {texts[currentTextIndex]}
            </span>
            .
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-primary">
            Welcome to Autopec
          </h1>

          {/* Car logos slider */}
          <div className="car-logos-slider">
            <div className="logos-wrapper">
              <img src={carLogo1} alt="Car Logo 1" className="car-logo" />
              <img src={carLogo2} alt="Car Logo 2" className="car-logo" />
              <img src={carLogo3} alt="Car Logo 3" className="car-logo" />
              <img src={carLogo4} alt="Car Logo 4" className="car-logo" />
              <img src={carLogo5} alt="Car Logo 5" className="car-logo" />
              <img src={carLogo1} alt="Car Logo 1" className="car-logo" />
              <img src={carLogo2} alt="Car Logo 2" className="car-logo" />
              {/* Duplicate logos for seamless flow */}
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
