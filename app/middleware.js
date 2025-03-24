// Requiring module
const express = require("express");

// CORS prevents the default behavior of blocking cross-origin requests
const cors = require("cors");

const morgan = require("morgan");

//using 3 middleware morgan, cors, express.json
const middleware = [morgan("dev"), cors(), express.json()];

module.exports = middleware;

// Logging: morgan("dev") logs requests.
// CORS Handling: cors() allows cross-origin requests.
// JSON Parsing: express.json() parses incoming JSON data.
// The "dev" argument is a predefined logging format that provides a concise and colored output.
