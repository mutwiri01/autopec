
import PropTypes from 'prop-types';

const WhyUsCard = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 space-y-4 bg-slate-100 hover:bg-secondary hover:text-white transition duration-200 ease-in-out rounded-md cursor-pointer">
      {icon}
      <h2 className="text-primary text-2xl font-bold">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

WhyUsCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WhyUsCard;
