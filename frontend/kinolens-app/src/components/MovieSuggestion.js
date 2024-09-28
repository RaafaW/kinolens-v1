import React from "react";

const MovieSuggestion = ({
  movieSuggestion,
  isCorrect,
  onNextMovie,
  onNewSearch,
}) => {
  return (
    <div className="suggestions">
      <h2>Sugestão de Filme</h2>
      <div id="movie-suggestion">
        {movieSuggestion || "Sua sugestão aparecerá aqui."}
      </div>
      {isCorrect && (
        <>
          <h3>Não é esse o filme?</h3>
          <button id="next-movie-btn" onClick={onNextMovie}>
            Continuar Tentando
          </button>
          <button id="new-search-btn" onClick={onNewSearch}>
            Reiniciar o Prompt
          </button>
        </>
      )}
    </div>
  );
};

export default MovieSuggestion;
