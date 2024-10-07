import { motion } from "framer-motion";
import PropTypes from "prop-types"; // Importing PropTypes

const FeatureCard = ({ img, name, description }) => {
  return (
    <motion.div
      className="card-container border-2 border-secondary bg-slate-100 text-black rounded-xl mb-2 cursor-pointer transition duration-200 ease-linear"
      whileHover={{ scale: 1.05 }} // Hover effect using framer-motion
      whileTap={{ scale: 0.95 }}   // Tap effect for a slight reduction in size
    >
      <div>
        <img src={img} alt={name} className="rounded-t-xl w-full" /> {/* Using `name` for alt text */}
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="font-semibold text-xl text-primary pt-2">{name}</h1>
        <p className="font-medium text-lg text-center pt-2">{description}</p>
      </div>
    </motion.div>
  );
};

// Adding PropTypes validation for props
FeatureCard.propTypes = {
  img: PropTypes.string.isRequired,        // `img` should be a string and is required
  name: PropTypes.string.isRequired,       // `name` should be a string and is required
  description: PropTypes.string.isRequired // `description` should be a string and is required
};

export default FeatureCard;
