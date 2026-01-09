const AfricasTalking = require("africastalking")({
  apiKey: process.env.AT_API_KEY,
  username: process.env.AT_USERNAME,
});

const sendSMS = async (phone, message) => {
  await AfricasTalking.SMS.send({
    to: [phone],
    message,
  });
};

module.exports = sendSMS;
