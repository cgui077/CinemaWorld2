import React from "react";
import ReactPlayer from "react-player";

const styles = {
  card: {
    padding: "15px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "1.5em",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  videoWrapper: {
    width: "100%",
    marginTop: "15px",
  },
};

const MovieCard = ({ movie, toggleWatched }) => (
  <div style={styles.card}>
    {/* Cartão com detalhes de cada filme */}
    <h2 style={styles.title}>{movie.title}</h2>
    <p>Direção: {movie.director}</p>
    <p>Ano: {movie.year}</p>
    <img src={movie.image} alt={movie.title} style={styles.image} />
    <div style={styles.videoWrapper}>
      <ReactPlayer url={movie.video} controls width="100%" height="200px" />
    </div>
    {/* Botão para marcar como assistido */}
    <button onClick={toggleWatched} className="watched-btn">
      {movie.watched ? "Desmarcar como Assistido" : "Marcar como Assistido"}
    </button>
  </div>
);

export default MovieCard;
