import  { useState } from 'react';
import { motion } from 'framer-motion';
import ProblemDialog from './ProblemDialog';

const OurCars = () => {
  const [isProblemDialogOpen, setIsProblemDialogOpen] = useState(false);

  const handleOpenProblemDialog = () => {
    setIsProblemDialogOpen(true);
  };

  const handleCloseProblemDialog = () => {
    setIsProblemDialogOpen(false);
  };

  const handleSubmitProblem = (formData) => {
    // Handle the submission of the problem (e.g., send to backend)
    console.log('Submitted problem:', formData);
    setIsProblemDialogOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">AI Car Diagnosis</h3>
            <p className="text-gray-600 mb-4">Get an instant AI-powered diagnosis for your car issues</p>
            <button
              onClick={handleOpenProblemDialog}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition duration-300"
            >
              Start Diagnosis
            </button>
          </div>
        </motion.div>
        {/* Add more service cards here if needed */}
      </div>
      <ProblemDialog
        isOpen={isProblemDialogOpen}
        onClose={handleCloseProblemDialog}
        onSubmit={handleSubmitProblem}
      />
    </div>
  );
};

export default OurCars;
