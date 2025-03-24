// require("dotenv").config("../.env");
// const mongoose = require("mongoose");

// const dbConnect = async () => {
//   // Construct MongoDB URI
//   const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ey9pz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

//   console.log("MONGO_URI:", MONGO_URI); // Debugging log

//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("Database is connected successfully!");
//   } catch (error) {
//     console.error("Database connection error:", error.message);
//   }
// };

// module.exports = dbConnect;
//////////////////////

// require("dotenv").config("../.env"); //imports the dotenv package,
require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = async () => {
  const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ey9pz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

  console.log(process.env.DB_USER);

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database is connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnect;

//We can find the MongoDB connection string in our MongoDB Atlas when click database then click connect
// # MONGO_URI=mongodb+srv://MERN_24BATCH:MERN_24BATCH@cluster0.ey9pz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
