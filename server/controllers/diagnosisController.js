const performDiagnosis = async (req, res) => {
    try {
      const { problemDescription } = req.body;
  
      // Simulate an AI diagnosis process
      const diagnosisResult = `Based on the problem description "${problemDescription}", the AI suggests...`;
  
      res.status(200).json({ diagnosis: diagnosisResult });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
    performDiagnosis,
  };
  