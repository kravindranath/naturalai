const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

// Example POST route
router.post("/api/user", (req, res) => {
  // logic to create user
  res.status(201).json({ message: "User created!" });
});

router.get("/api/user/:userId", userController.getUserById);
router.get("/api/users", userController.getAllUsers);

// Export router
module.exports = router;
