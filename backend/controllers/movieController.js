const openai = require("../config/openaiConfig");

const findMovieByDescription = async (req, res) => {
  const { description } = req.body;

  if (!description || description.trim().length < 10) {
    return res
      .status(400)
      .json({ error: "A descrição é muito curta ou genérica." });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Você é um assistente de filmes que ajuda as pessoas a identificar filmes com base em descrições. Responda apenas se a descrição fizer sentido e estiver relacionada a um filme. Caso contrário, diga que não há um filme correspondente.`,
        },
        {
          role: "user",
          content: `Estou tentando lembrar de um filme com a seguinte descrição: ${description}. Qual é o nome desse filme?`,
        },
      ],
      max_tokens: 60,
      temperature: 0.5,
    });

    const movieSuggestion = response.choices[0].message.content;

    if (
      movieSuggestion.length > 40 &&
      !movieSuggestion.toLowerCase().includes("não há um filme correspondente")
    ) {
      res.status(200).json({ movieSuggestion });
    } else {
      res.status(200).json({
        movieSuggestion:
          "Nenhuma sugestão válida encontrada para essa descrição.",
      });
    }
  } catch (error) {
    console.error("Erro ao buscar filme na API da OpenAI:", error.message);
    res.status(500).json({ error: "Erro ao buscar filme" });
  }
};

module.exports = { findMovieByDescription };
