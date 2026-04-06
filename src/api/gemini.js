import axios from "axios";

const API_KEY = "AIzaSyD0YRU31VswFGuMTYFJkMHItTwwLFxAAY4";

const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=";

export const generateReply = async (emailContent, tone = "professional") => {
  const prompt = `Generate a professional email reply. Do not include subject line.
  Use ${tone} tone.
  
  Email:
  ${emailContent}`;

  const res = await axios.post(API_URL + API_KEY, {
    contents: [
      {
        parts: [{ text: prompt }],
      },
    ],
  });

  return (
    res.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    "No response"
  );
};