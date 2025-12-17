//   const axios = require("axios");
//   const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`;
//   exports.connectAI = async (data) => {
//     try {
//       const response = await axios.post(url, data, {
//     headers: {
//       "Content-Type": "application/json",
//       "X-goog-api-key": process.env.KEY_AI,
//     },
//   });
//   // console.log("reponse",response);
  
//   return response.data;
//     } catch (error) {
//       // console.log(error);
//       throw error;
//     }
// }
const {GoogleGenAI}=require('@google/genai');
const AI=new GoogleGenAI({
  // apiKey: process.env.GEMINI_API_KEY,
});
  exports.connectAI = async (data) => {
    try {
      const response = await AI.models.generateContent({
       model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: data }],
        },
      ],
    });
      // console.log("reponse",response.text);
  return response.text;
    } catch (error) {
      // console.log(error);
      throw error;
    }
}