const sendEmail = require("../utils/sendEmail");

await sendEmail(
  user.email,
  "Password Reset",
  `<a href="${resetLink}">Reset Password</a>`
);
    res.json({ message: "Password reset successful" });
    
    await sendSMS(user.phone, `Your OTP is ${otp}`);
