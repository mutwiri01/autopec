import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Ensure you are using React Router for navigation
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatureCard from "./FeatureCard";

const Featured = () => {
  const navigate = useNavigate(); // Use navigate for redirecting

  const carsData = [
    {
      id: 0,
      img: "/pa2.jpg",
      name: "Paint Workshop",
      description: "Our paint workshop provides high-quality painting services, ensuring your vehicle looks brand new with a flawless finish",
    },
    {
      id: 1,
      img: "/a2.jpg",
      name: "Engine Repair",
      description: "We offer comprehensive engine repair services, diagnosing and fixing issues to enhance your vehicle's performance and reliability.",
    },
    {
      id: 2,
      img: "/cw2.png",
      name: "Car Wash",
      description: "Our car wash service ensures your vehicle is thoroughly cleaned inside and out, leaving it sparkling and fresh",
    },
    {
      id: 3,
      img: "/e3.jpg",
      name: "Engine Overhaul Repair",
      description: "We provide engine overhaul services, completely disassembling and rebuilding your engine to restore its performance and longevity.",
    },
    {
      id: 4,
      img: "/jp.jpg",
      name: "Number Plate Fitting",
      description: "At Autopec, we ensure professional number plate fitting and that plates are securely attached, aligned, and clearly visible, enhancing the car’s appearance and meeting regulatory standards.",
    },
    {
      id: 5,
      img: "/d3.jpg",
      name: "Diagnostic Services",
      description: "Our diagnostic services utilize advanced technology to identify engine problems accurately, allowing for efficient repairs and maintenance",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  // Function to handle the redirect to the services page
  const handleServicesRedirect = () => {
    navigate("/services"); // Redirects to the /services page
  };

  return (
    <div className="container mt-14">
      <h1 className="font-bold text-4xl text-center">
        Our<span className="text-primary"> Services</span>
      </h1>

      <p className="text-center">
        At Autopec, we offer an array of services tailored to meet all your vehicle needs, including:
      </p>

      <div className="mt-8">
        <Slider {...settings}>
          {carsData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <FeatureCard
                img={item.img}
                name={item.name}
                description={item.description}
              />
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Button to redirect to the services page */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleServicesRedirect}
          className="bg-primary text-white px-6 py-3 font-bold rounded hover:bg-secondary hover:scale-105 transition-transform"
        >
          View All Services
        </button>
      </div>
    </div>
  );
};

export default Featured;
