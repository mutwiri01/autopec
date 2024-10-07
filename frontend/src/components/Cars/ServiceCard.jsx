import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const ServiceCard = ({ icon, name, description }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden"
      whileHover={{ y: -5 }}
    >
      <div className="p-5">
        <div className="text-4xl text-primary mb-4">{icon}</div>
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white font-semibold py-2 px-4 rounded-full hover:bg-secondary transition duration-300 ease-in-out"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;