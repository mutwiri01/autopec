import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import BookingConfirmation from "./BookingConfirmation";

const ProblemDialog = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    carRegistrationNumber: "",
    carMake: "",
    carModel: "",
    problemDescription: "",
  });
  const [carMakes, setCarMakes] = useState([]); // Store the list of car makes and models
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [aiDiagnosis, setAiDiagnosis] = useState("");
  const [successMessageVisible, setSuccessMessageVisible] = useState(false); // Track visibility of success message

  // Fetch car makes from the backend
  useEffect(() => {
    const fetchCarMakes = async () => {
      try {
        const response = await fetch("https://autopeccloud.vercel.app/api/carmakes");
        const data = await response.json();
        setCarMakes(data); // Assuming data is an array of objects with make and models
      } catch (error) {
        console.error("Error fetching car makes:", error);
      }
    };
    fetchCarMakes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === "carMake" ? { carModel: "" } : {}), // Reset car model if car make is changed
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the diagnosis route in the backend for AI-based diagnosis
    try {
      const response = await fetch("https://autopeccloud.vercel.app/api/diagnosis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ problemDescription: formData.problemDescription }),
      });

      const result = await response.json();
      setAiDiagnosis(result.diagnosis); // Set the diagnosis result
      setShowConfirmation(true); // Proceed to booking confirmation
    } catch (error) {
      console.error("Error getting AI diagnosis:", error);
    }
  };

  const handleConfirmBooking = async () => {
    // Include carMake, problemDescription, and aiDiagnosis in the booking data
    const bookingData = {
      customerName: formData.customerName,
      carModel: formData.carModel,
      carRegistrationNumber: formData.carRegistrationNumber,
      carMake: formData.carMake,
      problemDescription: formData.problemDescription,
      diagnosis: aiDiagnosis, // Save the AI diagnosis to the backend
      date: new Date(),
      status: "pending",
    };

    try {
      const response = await fetch("https://autopeccloud.vercel.app/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Booking successful:", result);
        setShowConfirmation(false);
        setAiDiagnosis("");
        setFormData({
          customerName: "",
          carRegistrationNumber: "",
          carMake: "",
          carModel: "",
          problemDescription: "",
        });

        // Show success message and auto-dismiss after 3 seconds
        setSuccessMessageVisible(true);
        setTimeout(() => setSuccessMessageVisible(false), 3000);
        onClose(); // Close the dialog after booking
      } else {
        console.error("Failed to create booking");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancelBooking = () => {
    setShowConfirmation(false);
    setAiDiagnosis("");
  };

  if (!isOpen) return null;

  if (showConfirmation) {
    return (
      <BookingConfirmation
        bookingDetails={{ ...formData, aiDiagnosis }}
        onConfirm={handleConfirmBooking}
        onCancel={handleCancelBooking}
      />
    );
  }

  return (
    <>
      {successMessageVisible && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
          <p>Booking successful! We will contact you soon.</p>
        </div>
      )}

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
          <h2 className="text-2xl font-bold mb-4">Describe Your Car Problem</h2>
          <form onSubmit={handleSubmit}>
            {/* Customer Name Field */}
            <div className="mb-4">
              <label htmlFor="customerName" className="block mb-2">Customer Name</label>
              <input
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>

            {/* Car Registration Number Field */}
            <div className="mb-4">
              <label htmlFor="carRegistrationNumber" className="block mb-2">Car Registration Number</label>
              <input
                id="carRegistrationNumber"
                name="carRegistrationNumber"
                value={formData.carRegistrationNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>

            {/* Car Make Dropdown */}
            <div className="mb-4">
              <label htmlFor="carMake" className="block mb-2">Car Make</label>
              <select
                id="carMake"
                name="carMake"
                value={formData.carMake}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              >
                <option value="">Select a make</option>
                {carMakes.map((carMake) => (
                  <option key={carMake.make} value={carMake.make}>
                    {carMake.make}
                  </option>
                ))}
              </select>
            </div>

            {/* Car Model Dropdown */}
            <div className="mb-4">
              <label htmlFor="carModel" className="block mb-2">Car Model</label>
              <select
                id="carModel"
                name="carModel"
                value={formData.carModel}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                required
                disabled={!formData.carMake} // Disable the car model field until a make is selected
              >
                <option value="">Select a model</option>
                {formData.carMake &&
                  carMakes.find((carMake) => carMake.make === formData.carMake)?.models.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
              </select>
            </div>

            {/* Problem Description Field */}
            <div className="mb-4">
              <label htmlFor="problemDescription" className="block mb-2">Problem Description</label>
              <textarea
                id="problemDescription"
                name="problemDescription"
                value={formData.problemDescription}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                rows="4"
                required
              />
            </div>

            {/* AI Diagnosis Display */}
            {aiDiagnosis && (
              <div className="mb-4 p-4 border rounded-md bg-gray-100">
                <h3 className="font-semibold">AI Diagnosis:</h3>
                <p>{aiDiagnosis}</p>
              </div>
            )}

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Submit
            </button>
            <button type="button" className="ml-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-md" onClick={onClose}>
              Cancel
            </button>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
};

ProblemDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProblemDialog;
