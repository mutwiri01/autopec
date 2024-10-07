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
    const simulatedDiagnosis = await simulateAIDiagnosis(
      formData.problemDescription
    );
    setAiDiagnosis(simulatedDiagnosis);
    setShowConfirmation(true);
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
        onClose();
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

  const simulateAIDiagnosis = async (problemDescription) => {
    // Simulate a delay for AI diagnosis
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Define potential diagnoses based on keywords
    const diagnoses = [
      {
        keywords: ["engine", "stall", "overheat"],
        diagnosis: "It seems like the issue might be related to the engine.",
      },
      {
        keywords: ["brake", "squeal", "soft pedal"],
        diagnosis: "The problem could be with the braking system.",
      },
      {
        keywords: ["transmission", "shift", "gear"],
        diagnosis: "It might be an issue with the transmission.",
      },
      {
        keywords: ["battery", "start", "electrical"],
        diagnosis:
          "The problem could be related to the battery or electrical system.",
      },
      {
        keywords: ["steering", "vibration", "alignment"],
        diagnosis: "The issue could be with the steering or suspension.",
      },
      {
        keywords: ["tire", "flat", "pressure"],
        diagnosis:
          "It could be related to the tires, perhaps a puncture or low pressure.",
      },
      {
        keywords: ["coolant", "leak", "overheat"],
        diagnosis:
          "There may be an issue with the cooling system, such as a coolant leak.",
      },
      {
        keywords: ["fuel", "consumption", "smell"],
        diagnosis: "The problem might be related to the fuel system.",
      },
    ];

    // Check problem description for relevant keywords
    for (const { keywords, diagnosis } of diagnoses) {
      if (
        keywords.some((keyword) =>
          problemDescription.toLowerCase().includes(keyword)
        )
      ) {
        return `Based on the description "${problemDescription}", the AI suggests: ${diagnosis}`;
      }
    }

    // Default diagnosis if no keywords match
    return `Based on the description "${problemDescription}", the AI suggests a general inspection of the vehicle.`;
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
          <div className="mb-4">
            <label htmlFor="customerName" className="block mb-2">
              Customer Name
            </label>
            <input
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="carRegistrationNumber" className="block mb-2">
              Car Registration Number
            </label>
            <input
              id="carRegistrationNumber"
              name="carRegistrationNumber"
              value={formData.carRegistrationNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="carMake" className="block mb-2">
              Car Make
            </label>
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
          <div className="mb-4">
            <label htmlFor="carModel" className="block mb-2">
              Car Model
            </label>
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
                carMakes
                  .find((carMake) => carMake.make === formData.carMake)
                  .models.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="problemDescription" className="block mb-2">
              Problem Description
            </label>
            <textarea
              id="problemDescription"
              name="problemDescription"
              value={formData.problemDescription}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary"
            >
              Get AI Diagnosis
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

ProblemDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProblemDialog;
