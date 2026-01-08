const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");

// TEST ROUTE
router.get("/", (req, res) => {
  res.json({ message: "Users route working" });
});

// AUTH ROUTES
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
