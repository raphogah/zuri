const express = require('express');
const cors = require('cors');
const os = require('os');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// GET route to return CPU and OS information
app.get('/info', (req, res) => {
  const info = {
    cpu: os.cpus(),
    platform: os.platform(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
  };
  res.json(info);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});