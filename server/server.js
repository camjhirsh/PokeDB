// Express Server

require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

// serve static files found in dist
app.use(express.static(path.join(__dirname, '../client/dist')));


// Set Port and listen
const PORT = process.env.PORT || 1128;

app.listen(PORT, (res) => {
  console.log(`Listening on port ${PORT}`);
})
