import React, { useState } from "react";
import { findMovieByDescription } from "../api/movieApi";
import MovieSuggestion from "./MovieSuggestion";

const PromptInput = () => {
  const [description, setDescription] = useState("");
  const [movieSuggestion, setMovieSuggestion] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (description.trim() === "") {
      setMovieSuggestion("Por favor, insira uma descrição válida.");
      return;
    }

    const response = await findMovieByDescription(description, false, null);
    setMovieSuggestion(
      response.movieSuggestion || "Não foi possível encontrar o filme."
    );
    setIsCorrect(true);
  };

  const handleNextMovie = async () => {
    const response = await findMovieByDescription(
      description,
      true,
      movieSuggestion
    ); // Enviar o filme anterior
    setMovieSuggestion(
      response.movieSuggestion || "Não foi possível encontrar outro filme."
    );
  };

  const handleNewSearch = () => {
    setDescription("");
    setMovieSuggestion("");
    setIsCorrect(false);
  };

  return (
    <div className="container">
      <div className="input-section">
        <textarea
          id="description-input"
          placeholder="Descreva o que você lembra do filme..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
        />
        <button id="submit-btn" onClick={handleSubmit}>
          Encontrar Filme
        </button>
      </div>

      <MovieSuggestion
        movieSuggestion={movieSuggestion}
        isCorrect={isCorrect}
        onNextMovie={handleNextMovie}
        onNewSearch={handleNewSearch}
      />
    </div>
  );
};

export default PromptInput;
