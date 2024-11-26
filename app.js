const express = require('express');
const session = require('express-session');
require('dotenv').config();

const dbConnect = require('./config/db');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);

  // Send Message to browser
  console.log('Sending message to the browser...');
  app.get('/', (req, res) => {
    res.send('Server Started Successfully!');
  });
});