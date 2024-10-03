import React from "react";
import "./index.css";

const About = () => {
  return (
    <div className="about-container" id="about">
      {/* Seção "Sobre Nós" */}
      <h1>Sobre o Cinema World</h1>
      <div className="grid-container">
        <div className="grid-item">
          <h2>Nossa História</h2>
          <p>
            O Cinema World começou como um pequeno projeto para compartilhar
            críticas e recomendações de filmes.
          </p>
        </div>
        <div className="grid-item">
          <h2>Nossa Missão</h2>
          <p>
            Fornecer aos entusiastas de cinema análises perspicazes e
            conectá-los com uma comunidade de pessoas com interesses
            semelhantes.
          </p>
        </div>
        <div className="grid-item">
          <h2>Nossa Visão</h2>
          <p>
            Tornar-se uma fonte confiável de informações sobre filmes e promover
            uma comunidade que valorize o cinema como uma forma de arte.
          </p>
        </div>
        <div className="grid-item">
          <h2>Entre em Contato</h2>
          <p>
            Fale conosco pelo e-mail:{" "}
            <a href="carlos.gpereira@al.infnet.edu.br">
              carlos.gpereira@al.infnet.edu.br
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
