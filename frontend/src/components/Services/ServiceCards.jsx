import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ServiceCards = ({ icon, title, description, imgBefore, imgAfter }) => {
  const [isAfter, setIsAfter] = useState(false); // State to track which image is displayed

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAfter(prev => !prev); // Toggle the image every 3 seconds
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleImageClick = () => {
    setIsAfter(!isAfter); // Optional: Toggle the image on click
  };

  return (
    <div className="relative text-center p-8 space-y-4 bg-slate-100 rounded-md cursor-pointer overflow-hidden transition duration-300 ease-in-out hover:bg-secondary hover:text-white">
      {/* Moving light effect */}
      <div className="absolute inset-0 rounded-md animate-light pointer-events-none z-0"></div>

      {/* Card content */}
      <div className="relative z-10" onClick={handleImageClick}>
        {/* Image Section */}
        <img 
          src={isAfter ? imgAfter : imgBefore} 
          alt={title} 
          className="mx-auto w-full h-48 object-cover rounded-md" 
        />

        {/* Icon Section */}
        <div className="mt-4">
          {icon}
        </div>

        {/* Title */}
        <h1 className="text-primary text-3xl font-bold mt-4">{title}</h1>

        {/* Description */}
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

// PropTypes validation
ServiceCards.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgBefore: PropTypes.string.isRequired,
  imgAfter: PropTypes.string.isRequired,
};

export default ServiceCards;
