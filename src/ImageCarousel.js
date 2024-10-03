import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => (
  <div className="carousel-container">
    {/* Carrossel de imagens para exibir filmes em destaque */}
    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
      <div>
        <img
          src="https://img.odcdn.com.br/wp-content/uploads/2023/03/velozesefuriosos10_5.jpg"
          alt="Filme 1"
        />
        <p className="legend">Filme 1</p>
      </div>
      <div>
        <img
          src="https://www.politicadistrital.com.br/wp-content/uploads/2024/09/interstellar.webp"
          alt="Filme 2"
        />
        <p className="legend">Filme 2</p>
      </div>
      <div>
        <img
          src="https://vermelho.org.br/wp-content/uploads/2021/08/avidaebeladivulga%C3%A7%C3%A3o.jpg"
          alt="Filme 3"
        />
        <p className="legend">Filme 3</p>
      </div>
    </Carousel>
  </div>
);

export default ImageCarousel;
