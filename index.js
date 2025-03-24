const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb"); // Import MongoClient
const cors = require("cors");
const app = express();
const port = 5001;

//middleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://expressServer:Ero3TSivNcq8VAk6@cluster0.ey9pz.mongodb.net/basicExpressDB?appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const usersColection = client.db().collection("users");
    app.post("/signup", async (req, res) => {
      const newUser = req.body;
      const result = await usersColection.insertOne(newUser);
      res.send({
        data: result,
        status: 200,
        message: "User created successfuly",
      });
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World! I am using nodemon");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
