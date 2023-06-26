import React from "react";

const Button = ({ children }) => {
  const buttonStyle = {
    background: "linear-gradient(to right, #7a49a8, #61a4bc)",
    transition: "background-color 0.3s",
    borderRadius: "4px",
    padding: "10px 20px",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  };

  const hoverStyle = {
    background: "linear-gradient(to right, #61a4bc, #7a49a8)",
  };

  const handleMouseEnter = (e) => {
    e.target.style.background = hoverStyle.background;
  };

  const handleMouseLeave = (e) => {
    e.target.style.background = buttonStyle.background;
  };

  return (
    <button
      className="btn btn-lg"
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
