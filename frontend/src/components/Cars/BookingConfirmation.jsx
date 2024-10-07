import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const BookingConfirmation = ({ bookingDetails, onConfirm, onCancel }) => {
  // Ensure bookingDetails has a default value/ Default value if undefined

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-lg p-8 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-4">Confirm Your Booking</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Car Details:</h3>
          <p><strong>Make:</strong> {bookingDetails.carMake}</p>
          <p><strong>Model:</strong> {bookingDetails.carModel}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Problem Description:</h3>
          <p>{bookingDetails.problemDescription}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">AI Diagnosis:</h3>
          <p>{bookingDetails.aiDiagnosis}</p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className="mr-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              // Clear booking details after confirmation
              bookingDetails = {}; // Assuming bookingDetails is managed in a parent component
            }}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary"
          >
            Confirm Booking
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

BookingConfirmation.propTypes = {
  bookingDetails: PropTypes.shape({
    carMake: PropTypes.string.isRequired,
    carModel: PropTypes.string.isRequired,
    problemDescription: PropTypes.string.isRequired,
    aiDiagnosis: PropTypes.string.isRequired,
  }).isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default BookingConfirmation;