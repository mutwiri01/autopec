import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Slider styles should be here
import b2 from "/a2.jpg";
import b3 from "/a3.png";
import b4 from "/approch.jpg";
import b5 from "/news1.jpg";
import m1 from "/re1.jpg"; // Add your maintenance-specific images
import m2 from "/re5.jpg";
import m3 from "/re2.jpg";
import m4 from "/re6.jpg";
import repairVideo from "/repair.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faTools,
  faCar,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick"; // For image slider
import "../components/css/Blog.css";

const Blog = () => {
  const [selectedCarMake, setSelectedCarMake] = useState("Toyota");

  const blogPosts = [
    {
      title: "How to Diagnose Engine Issues",
      date: "October 1, 2024",
      content: `Engine problems can range from minor to severe. Learn how to identify common signs such as abnormal sounds, check engine lights, or unusual vibrations. If you encounter these issues, consult a professional mechanic.`,
      imageUrl: b2,
    },
    {
      title: "Car Maintenance Tips",
      date: "September 28, 2024",
      content: `Regular car maintenance is crucial for safety and performance. Ensure you check your oil levels, tire pressure, and brakes at regular intervals. Following the manufacturer's service schedule can save you from unexpected breakdowns.`,
      imageUrl: b3,
    },
    {
      title: "Understanding Car Insurance",
      date: "September 20, 2024",
      content: `Car insurance can be confusing. It's important to understand your coverage options and what they mean for you. Always review your policy annually to ensure you're getting the best rates and coverage.`,
      imageUrl: b4,
    },
    {
      title: "Driving Tips",
      date: "September 15, 2024",
      content: `Driving in foggy weather can be challenging. Here are some tips to ensure your safety on the road: - Keep an emergency kit in your car. - Drive slowly and maintain distance from other vehicles. - Always clear your windows before driving.`,
      imageUrl: b5,
    },
  ];

  const carMakes = ["Toyota", "Landrover", "Nissan", "Subaru"];

  const repairImages = {
    Landrover: ["/b3.jpg", "/lr3.jpg", "/b1.jpg", "/b2.jpg"],
    Toyota: ["/m3.jpg", "/m1.jpg", "/p4.jpg", "/m2.jpg"],
    Nissan: ["/buf2.jpg", "/n2.jpg", "/n1.jpg", "/buf1.jpg"],
    Subaru: ["/s1.jpg", "/s2.jpg", "/s4.jpg", "/s3.jpg"],
  };

  // New array with maintenance images
  const maintenanceImages = [m1, m2, m3, m4]; // Add paths to maintenance images

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 2000, // Set the interval between slides (in milliseconds)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
        },
      },
    ],
  };

  return (
    <div className="pt-24 container mx-auto py-12">
      {/* Image Slider for Car Maintenance Tips */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-4 text-center">
          OUR RECENT WORKS
        </h2>
        <Slider {...sliderSettings}>
          {maintenanceImages.map((image, index) => (
            <div key={index} className="px-4">
              <img
                src={image}
                alt={`Maintenance Tip ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Video section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Watch Our Repair Process</h2>
        <video
          className="w-full md:w-2/3 mx-auto rounded-lg shadow-lg"
          controls
        >
          <source src={repairVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Image gallery for selected car make */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Car Repair: Start to Finish
        </h2>
        <div className="text-center mb-6">
          <label htmlFor="car-make" className="text-lg font-semibold">
            Select Car Make:{" "}
          </label>
          <select
            id="car-make"
            value={selectedCarMake}
            onChange={(e) => setSelectedCarMake(e.target.value)}
            className="ml-4 p-2 border border-gray-300 rounded-lg"
          >
            {carMakes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {repairImages[selectedCarMake].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Repair ${selectedCarMake} ${index}`}
              className="w-full h-40 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          ))}
        </div>
      </div>

      {/* Blog posts section - Moved to the bottom */}
      <div className="mt-16">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Car Advice & Tips
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="blog-post bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-600">{post.date}</p>
                <p className="mt-4">{post.content}</p>
                <div className="flex mt-4 space-x-2">
                  <FontAwesomeIcon icon={faWrench} className="text-teal-500" />
                  <FontAwesomeIcon icon={faTools} className="text-teal-500" />
                  <FontAwesomeIcon icon={faCar} className="text-teal-500" />
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    className="text-teal-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
