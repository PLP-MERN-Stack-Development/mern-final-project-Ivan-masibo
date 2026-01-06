const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json({
    _id: user._id,
    email: user.email,
    token: generateToken(user._id),
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

module.exports = { registerUser, loginUser };
