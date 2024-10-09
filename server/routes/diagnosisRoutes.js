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
        { role: "user", content: `Based on the problem description "${problemDescription}", what could be the potential car issues?` },
      ],
      max_tokens: 100, // Adjust max tokens as needed
    });

    const diagnosis = aiResponse.choices[0].message.content;
    return res.status(200).json({ diagnosis });
  } catch (error) {
    console.error('Error calling Groq API:', error);
    return res.status(500).json({ error: 'Failed to get AI diagnosis.' });
  }
});

module.exports = router;
