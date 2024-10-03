import React from "react";
import "./index.css";

const ToggleSwitch = ({ label, isChecked, onToggle }) => {
  return (
    <div className="toggle-switch-container">
      <label className="toggle-switch">
        {/* O input checkbox controla o estado do toggle switch, acionando a função `onToggle` ao ser clicado */}
        <input type="checkbox" checked={isChecked} onChange={onToggle} />
        <span className="slider"></span>
      </label>
      <span className="toggle-label">{label}</span>
    </div>
  );
};

export default ToggleSwitch;
