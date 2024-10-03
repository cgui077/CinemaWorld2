import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaFilm,
  FaChevronDown,
} from "react-icons/fa";
import styled from "styled-components";
import logo from "./assets/logo.png";
import ToggleSwitch from "./ToggleSwitch";

const Nav = styled.nav`
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  position: relative;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: ${({ isOpen }) =>
    isOpen
      ? "flex"
      : "none"}; // Controla a visibilidade dos links de navegação no modo mobile
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 0;
  background: rgba(34, 34, 34, 0.9);
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  @media (min-width: 768px) {
    display: flex;
    position: static;
    flex-direction: row;
    background: none;
    box-shadow: none;
  }
`;

const NavLink = styled.li`
  padding: 10px;
  position: relative;
  color: #fff;
  &:hover .dropdown-menu {
    display: block;
  }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #444;
  border-radius: 5px;
  list-style: none;
  padding: 10px 0;
  z-index: 10;
  min-width: 150px;
`;

const DropdownItem = styled.li`
  padding: 10px 15px;
  &:hover {
    background: #555;
  }
`;

const HamburgerMenu = styled.button`
  display: block;
  font-size: 25px;
  background: none;
  color: #fff;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none; // Esconde o ícone de menu hamburguer no modo desktop
  }
`;

const Navbar = ({ onGenreChange }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode"; // Atualiza a classe do body com base no tema selecionado
  }, [isDarkMode]);

  const scrollToMovies = (genre) => {
    onGenreChange(genre);
    const movieSection = document.getElementById("filmes");
    if (movieSection) {
      movieSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Nav>
      <NavContainer>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo src={logo} alt="Logo do Cinema World" />
          <h2 style={{ color: "#fff", marginLeft: "10px" }}>Cinema World</h2>
        </div>
        <HamburgerMenu onClick={toggleMobileMenu}>&#9776;</HamburgerMenu>
        <NavLinks isOpen={isMobileMenuOpen}>
          <NavLink>
            <a href="#home" style={{ color: "#fff" }}>
              <FaHome /> Início
            </a>
          </NavLink>
          <NavLink>
            <a href="#about" style={{ color: "#fff" }}>
              <FaInfoCircle /> Sobre
            </a>
          </NavLink>
          <NavLink>
            <a href="#contact" style={{ color: "#fff" }}>
              <FaPhone /> Contato
            </a>
          </NavLink>
          <NavLink>
            <a style={{ color: "#fff", cursor: "pointer" }}>
              <FaFilm /> Filmes <FaChevronDown />
            </a>
            <DropdownMenu className="dropdown-menu">
              <DropdownItem onClick={() => scrollToMovies("Ficção Científica")}>
                <a style={{ color: "#fff" }}>Ficção Científica</a>
              </DropdownItem>
              <DropdownItem onClick={() => scrollToMovies("Ação")}>
                <a style={{ color: "#fff" }}>Ação</a>
              </DropdownItem>
              <DropdownItem onClick={() => scrollToMovies("Drama")}>
                <a style={{ color: "#fff" }}>Drama</a>
              </DropdownItem>
            </DropdownMenu>
          </NavLink>
          <NavLink>
            <ToggleSwitch
              label={isDarkMode ? "Modo Escuro" : "Modo Claro"}
              isChecked={isDarkMode}
              onToggle={toggleTheme}
            />
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
