import { useState, useEffect } from "react";
import img0 from "../../../assets/img/c1.jpg";
import img1 from "../../../assets/e1.jpg";
import img2 from "../../../assets/p1.jpg";
import img3 from "../../../assets/d1.jpg";
import img4 from "../../../assets/b1.jpg";
import img5 from "../../../assets/img/a2.jpg";
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
    <div className="hero-container pt-20">
      <div className="content-container flex flex-col md:flex-row">
        <div className="image-section md:order-2 mb-6 md:mb-0">
          <img
            src={images[currentTextIndex]}
            alt="Car"
            className="rotating-image w-full md:w-auto"
          />
        </div>
        <div className="text-section md:order-1">
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
          <p className="alert-text text-lg lg:text-2xl font-medium text-primary">
            Your One-Stop Auto Shop!
          </p>
          <p className="text-sm lg:text-base text-black">
            At Autopec, we take pride in delivering exceptional automotive services that keep your vehicle running smoothly. Our skilled technicians are here to provide top-notch care for your car. Experience reliability and quality because your car deserves the best!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
