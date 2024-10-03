import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import MovieList from "./MovieList";
import Footer from "./Footer";
import About from "./About";
import ImageCarousel from "./ImageCarousel";
import Button from "./Button";
import "./index.css";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState("Todos");

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const [message, setMessage] = useState("");

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Seção do cabeçalho */}
      <header id="home">
        <Navbar onGenreChange={handleGenreChange} />
        <Header />
      </header>

      <main>
        {/* Carrossel de imagens */}
        <ImageCarousel />
        <MovieList
          selectedGenre={selectedGenre}
          onGenreSelect={handleGenreChange}
        />
        <About />

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h2>Teste de Componente de Botão</h2>
          <p>{message}</p>
          <Button primary size="large" onClick={scrollToAbout}>
            Rolar para Sobre Nós
          </Button>
          <Button size="small" onClick={scrollToTop}>
            Rolar ao Topo
          </Button>
        </div>
      </main>

      {/* Seção do rodapé */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default App;
