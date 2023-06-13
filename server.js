const express = require('express');
const app = express();

// Endpoint that sends a response
app.get('/endpoint', (req, res) => {
  res.send('This is the response from the /endpoint');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
