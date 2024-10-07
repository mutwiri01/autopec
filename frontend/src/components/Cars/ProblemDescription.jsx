import React, { useState } from 'react';

const App = () => {
  const [problemDescription, setProblemDescription] = useState('');
  const [aiRecommendation, setAiRecommendation] = useState(null);

  const simulateAIAnalysis = async (problemDescription) => {
    // Define the services and their keywords
    const services = {
      battery: "Battery - BATTERY TEST & FITMENT",
      brakePads: "Brakes - Brake Pads - FITTING PER PAIR",
      brakeDisks: "Brakes - Brake Disks",
      oilServiceMinor: "Oil Service - Oil Service Minor - OIL, OIL FILTER, AIR FILTER",
      oilServiceMajor: "Oil Services Major - OIL, OIL FILTER, AIR FILTER, SPARK PLUGS",
      sparkPlugs: "Spark Plugs - SPARK PLUGS",
      suspension: "Suspension - Shock Absorbers and Alignment",
      coilSprings: "Coil springs & alignment",
      tyreFitment: "Tyres & Tyre services - tyre fitment - passenger car / SUV car",
      tyreBalancing: "tyre fitment and balancing",
      tyreRotation: "tyre rotation",
      punctureRepair: "puncture repair",
      electronicDiagnosis: "Inspection - Electronic diagnosis",
      lightBulbs: "Inspection - Light bulbs",
      wipers: "Inspection - wipers"
    };

    // Simulate processing the problem description to find relevant services
    return new Promise((resolve) => {
      setTimeout(() => {
        const matchingServices = Object.entries(services).filter(([key, value]) =>
          problemDescription.toLowerCase().includes(key)
        ).map(([_, value]) => value);

        if (matchingServices.length > 0) {
          resolve({
            status: 'success',
            description: "Based on your issue, we recommend the following services:",
            services: matchingServices
          });
        } else {
          resolve({
            status: 'not_found',
            description: "Sorry, we couldn't identify the issue based on your description. Please provide more details."
          });
        }
      }, 1000); // Simulate an asynchronous operation with a timeout
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const recommendation = await simulateAIAnalysis(problemDescription);
      setAiRecommendation(recommendation);
    } catch (error) {
      console.error('Error in AI analysis:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Car Service AI Analysis</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="problemDescription">Describe your issue:</label>
          <textarea
            id="problemDescription"
            value={problemDescription}
            onChange={(e) => setProblemDescription(e.target.value)}
            rows="4"
            cols="50"
            required
          />
        </div>
        <button type="submit">Analyze</button>
      </form>
      {aiRecommendation && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h2>AI Recommendation</h2>
          <p>{aiRecommendation.description}</p>
          {aiRecommendation.status === 'success' && (
            <ul>
              {aiRecommendation.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
