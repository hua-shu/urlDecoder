const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
app.use(express.json());

// POST route to handle the URL decoding and extraction
app.post('/decode-url', async (req, res) => {
  try {
    // Get the encoded URL from the request
    const encodedURL = req.body.encodedURL;

    // Decode the URL
    const decodedURL = decodeURIComponent(encodedURL);

    // Fetch the HTML content from the decoded URL
    const response = await axios.get(decodedURL);

    // Load the HTML response using cheerio
    const $ = cheerio.load(response.data);

    // Find the first link that matches your criteria (update selector based on actual HTML structure)
    const jobLink = $('a.result__a').attr('href');

    // If a link is found, return it as a response
    if (jobLink) {
      res.json({ jobLink: 'https:' + jobLink });
    } else {
      res.status(404).json({ message: 'Job link not found.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching or parsing the URL.' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
