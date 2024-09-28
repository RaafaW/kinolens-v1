import axios from "axios";

export const findMovieByDescription = async (description) => {
  try {
    console.log(
      "Enviando requisição para o backend com a descrição:",
      description
    );
    const response = await axios.post("http://localhost:5000/api/movies/find", {
      description,
    });
    console.log("Resposta do backend:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar o filme", error);
    return { movieSuggestion: "Não foi possível encontrar o filme." };
  }
};
