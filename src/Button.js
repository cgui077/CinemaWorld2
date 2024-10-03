import React from "react";
import styles from "./Button.module.css";

const Button = ({ primary, size, children, onClick }) => {
  // Definindo estilos do botão com base nas props
  const classNames = `
    ${styles.button} 
    ${primary ? styles.primary : styles.secondary} 
    ${size === "large" ? styles.large : styles.small}
  `;

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
