import React from "react";
import "./index.css";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar-container">
      {/* A largura da barra de progresso é ajustada dinamicamente com base na porcentagem fornecida */}
      <div className="progress-bar" style={{ width: `${percentage}%` }}>
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
