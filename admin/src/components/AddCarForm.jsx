import  { useState } from 'react';

const AddCarForm = () => {
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    year: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carData),
      });
      if (response.ok) {
        alert('Car added successfully!');
        setCarData({ make: '', model: '', year: '' });
      } else {
        alert('Error adding car');
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Car</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700">Car Make</label>
          <input
            type="text"
            name="make"
            value={carData.make}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Car Model</label>
          <input
            type="text"
            name="model"
            value={carData.model}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Car Year</label>
          <input
            type="number"
            name="year"
            value={carData.year}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AddCarForm;
