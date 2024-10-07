import { motion } from 'framer-motion';

const BookingConfirmation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto pt-24 px-4"
    >
      <h1 className="text-3xl font-bold mb-6">Booking Confirmation</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Thank you for your booking!</h2>
        <p className="mb-4">
          Your car repair service has been scheduled. We will contact you shortly with more details.
        </p>
        <p className="font-semibold">Booking Details:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Service: Car Repair</li>
          <li>Date: [Insert dynamic date]</li>
          <li>Time: [Insert dynamic time]</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default BookingConfirmation;