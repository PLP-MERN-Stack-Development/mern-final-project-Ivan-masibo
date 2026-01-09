const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  forgotPasswordEmail,
  forgotPasswordPhone,
  resetPasswordEmail,
  resetPasswordPhone,
} = require("../controllers/userController");

// TEST ROUTE
router.get("/", (req, res) => {
  res.json({ message: "Users route working" });
});

// AUTH ROUTES
router.post("/register", registerUser);
router.post("/login", loginUser);

// PASSWORD RESET ROUTES
router.post("/forgot-password/email", forgotPasswordEmail);
router.post("/forgot-password/phone", forgotPasswordPhone);
router.post("/reset-password/email/:token", resetPasswordEmail);
router.post("/reset-password/phone", resetPasswordPhone);

module.exports = router;
