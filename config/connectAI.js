  const axios = require("axios");
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`;
  exports.connectAI = async (data) => {
  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
      "X-goog-api-key": process.env.KEY_AI,
    },
  });
  return response.data;
}