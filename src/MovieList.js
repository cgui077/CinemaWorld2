import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import ProgressBar from "./ProgressBar";
import "./index.css";

const movies = [
  {
    id: 1,
    title: "Velozes e Furiosos 10",
    director: "Louis Leterrier",
    year: 2023,
    genre: "Ação",
    watched: false,
    image:
      "https://img.odcdn.com.br/wp-content/uploads/2023/03/velozesefuriosos10_5.jpg",
    video: "https://www.youtube.com/watch?v=ByGA7aWSxW4",
  },
  {
    id: 2,
    title: "Interestelar",
    director: "Christopher Nolan",
    year: 2014,
    genre: "Ficção Científica",
    watched: false,
    image:
      "https://www.politicadistrital.com.br/wp-content/uploads/2024/09/interstellar.webp",
    video: "https://www.youtube.com/watch?v=i6avfCqKcQo",
  },
  {
    id: 3,
    title: "A Vida é Bela",
    director: "Roberto Benigni",
    year: 1997,
    genre: "Drama",
    watched: false,
    image:
      "https://vermelho.org.br/wp-content/uploads/2021/08/avidaebeladivulga%C3%A7%C3%A3o.jpg",
    video: "https://www.youtube.com/watch?v=2MPGncRcZwk",
  },
  {
    id: 4,
    title: "O Cavaleiro das Trevas",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Ação",
    watched: false,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsl6YAzDlmGLsJGByQOkdr2eo9TwNdqccPvA&s",
    video: "https://www.youtube.com/watch?v=zqfz04yCTnE",
  },
  {
    id: 5,
    title: "Matrix",
    director: "Wachowskis",
    year: 1999,
    genre: "Ficção Científica",
    watched: false,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRv6IYSVxg4Cm4T1loglaLfPubENd6Yz12g&s",
    video: "https://www.youtube.com/watch?v=2KnZac176Hs",
  },
  {
    id: 6,
    title: "Clube da Luta",
    director: "David Fincher",
    year: 1999,
    genre: "Drama",
    watched: false,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3s3yxhm6QLYF5kc9gpEZ0CySBexhHyJFN0A&s",
    video: "https://www.youtube.com/watch?v=Fs0-4NLSO2Y",
  },
];

const MovieList = ({ selectedGenreFromNavbar }) => {
  const [selectedGenre, setSelectedGenre] =
    useState(
      "Todos"
    ); /* Estado para armazenar o gênero selecionado pelo usuário */
  const [movieList, setMovieList] =
    useState(movies); /* Estado para armazenar a lista de filmes */

  useEffect(() => {
    if (selectedGenreFromNavbar) {
      setSelectedGenre(
        selectedGenreFromNavbar
      ); /* Atualiza o gênero selecionado caso receba um valor da barra de navegação */
    }
  }, [selectedGenreFromNavbar]);

  const toggleWatched = (id) => {
    const updatedMovies = movieList.map((movie) =>
      movie.id === id ? { ...movie, watched: !movie.watched } : movie
    );
    setMovieList(
      updatedMovies
    ); /* Atualiza o estado da lista de filmes com o status de assistido alterado */
  };

  const filteredMovies =
    selectedGenre === "Todos"
      ? movieList
      : movieList.filter(
          (movie) => movie.genre === selectedGenre
        ); /* Filtra a lista de filmes com base no gênero selecionado */

  const totalMovies = movieList.length;
  const watchedMovies = movieList.filter((movie) => movie.watched).length;
  const progress = Math.round((watchedMovies / totalMovies) * 100);

  return (
    <div className="movie-list container" id="filmes">
      <h2>Progresso de Filmes Assistidos</h2>
      <ProgressBar percentage={progress} />
      <div className="genre-filter">
        <label>Filtrar por Gênero: </label>
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="Todos">Todos</option>
          <option value="Ficção Científica">Ficção Científica</option>
          <option value="Drama">Drama</option>
          <option value="Ação">Ação</option>
        </select>
      </div>
      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            toggleWatched={() => toggleWatched(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
