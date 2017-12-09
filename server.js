const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require ('./Router')
const express = require('express');

const app = express();
// Connect to MongoDB
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/register',{ useMongoClient: true });

// Logger that outputs all requests into the console
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(router);
// Launch the server on port 3000
const server = app.listen(3000, '127.0.0.1', () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html')
//   // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
//   // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
// })
