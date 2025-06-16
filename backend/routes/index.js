const express = require("express");
const router = express.Router();

// Example POST route
router.post("/user", (req, res) => {
  // logic to create user
  res.status(201).json({ message: "User created!" });
});

router.get("/user/:userId", (req, res) => {
  const userId = req?.params?.userId || "";
  // logic to get user
  res.status(200).json({ message: "called user", userId });
});

// Export router
module.exports = router;
