//This is our root file where the application is running

//Import the built-in 'http' module to create an HTTP server
const http = require("http");

//Import the Express application from the 'app' directory
const app = require("./app/app");

//create the server and passing the app
const server = http.createServer(app);

const port = 5000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is listining the port ${port}`);
});
