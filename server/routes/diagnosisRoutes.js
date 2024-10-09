const express = require('express');
const router = express.Router();
const Groq = require('groq-sdk');

// Initialize the Groq client with your API key
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY, // Set this in your .env file
});

router.post('/', async (req, res) => {
  const { problemDescription } = req.body;

  // Validate input
  if (!problemDescription) {
    return res.status(400).json({ error: 'Problem description is required.' });
  }

  try {
    // Make a request to Groq's API for diagnosis
    const aiResponse = await groq.chat.completions.create({
      model: "llama3-8b-8192", // Use the appropriate Groq model
      messages: [
        {
          role: "user",
          content: `As a professional mechanic, diagnose the following car problem: "${problemDescription}". Provide a detailed explanation of possible issues, potential causes, and recommended actions to take.`
        },
      ],
      max_tokens: 100, // Adjust max tokens as needed for more detail
      temperature: 1, // Adjust to control the creativity of responses
    });

    // Ensure the response is complete and informative
    const diagnosis = aiResponse.choices[0]?.message?.content.trim() || "No diagnosis available.";
    return res.status(200).json({ diagnosis });
  } catch (error) {
    console.error('Error calling Groq API:', error);
    return res.status(500).json({ error: 'Failed to get AI diagnosis.' });
  }
});

module.exports = router;
