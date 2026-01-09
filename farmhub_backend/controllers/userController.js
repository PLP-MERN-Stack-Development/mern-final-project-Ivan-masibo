const User = require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const Twilio = require("twilio");

// 🔑 Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// ================= REGISTER =================
const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password, role } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ❗ DO NOT hash here (model handles it)
    const user = await User.create({
      name,
      email,
      phone,
      password,
      role,
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
};

// ================= LOGIN =================
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
};

// ================= FORGOT PASSWORD (EMAIL) =================
const forgotPasswordEmail = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const resetToken = crypto.randomBytes(20).toString("hex");

  user.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
  await user.save();

  const resetLink = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

  // TODO: send email (Nodemailer)
  console.log("EMAIL RESET LINK:", resetLink);

  res.json({ message: "Reset link sent to email" });
};

// ================= FORGOT PASSWORD (PHONE OTP) =================
const forgotPasswordPhone = async (req, res) => {
  const user = await User.findOne({ phone: req.body.phone });
  if (!user) return res.status(404).json({ message: "User not found" });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  user.otpCode = otp;
  user.otpExpire = Date.now() + 10 * 60 * 1000;
  await user.save();

  // TODO: send SMS (Twilio / Africa’s Talking)
  console.log("PHONE OTP:", otp);

  res.json({ message: "OTP sent to phone" });
};

// ================= RESET PASSWORD (EMAIL) =================
const resetPasswordEmail = async (req, res) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) return res.status(400).json({ message: "Invalid or expired token" });

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  res.json({ message: "Password reset successful" });
};

// ================= RESET PASSWORD (PHONE) =================
const resetPasswordPhone = async (req, res) => {
  const { phone, otp, password } = req.body;

  const user = await User.findOne({
    phone,
    otpCode: otp,
    otpExpire: { $gt: Date.now() },
  });

  if (!user) return res.status(400).json({ message: "Invalid or expired OTP" });

  user.password = password;
  user.otpCode = undefined;
  user.otpExpire = undefined;
  await user.save();

  res.json({ message: "Password reset successful" });
};

module.exports = {
  registerUser,
  loginUser,
  forgotPasswordEmail,
  forgotPasswordPhone,
  resetPasswordEmail,
  resetPasswordPhone,
};
