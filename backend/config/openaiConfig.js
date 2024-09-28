const OpenAI = require("openai");
require("dotenv").config();

// Configuração da API OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = openai;
