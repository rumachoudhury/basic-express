const express = require("express");
const app = express();
const appRoutes = require("./routes");
const { notFoundHandler, globalErrorHandler } = require("./error"); //import the error.js file
const middleware = require("./middleware");
const dbConnect = require("../db/dbConnect");

//Add this line to parse JSON requests and it was my issues so this is importent. Without it, req.body would be undefined
app.use(express.json());

// Connects to the database
dbConnect();

//Applies middleware
app.use(middleware);

// Uses defined routes
app.use(appRoutes);

// Handles 404 errors
app.use(notFoundHandler);

// Handles global errors
app.use(globalErrorHandler);

module.exports = app;
