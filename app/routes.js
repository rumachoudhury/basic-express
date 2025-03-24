const express = require("express");

const router = express.Router();

// API routes (user routes)
router.use("/api/user", require("../routes/user"));

// routing with get method and the end point is health
router.get("/health", (req, res) => {
  return res.status(200).json({
    message: "Success",
  });
});

module.exports = router;
