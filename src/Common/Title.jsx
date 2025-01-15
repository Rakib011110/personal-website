import React from "react";

const TextComponent = ({ children }) => {
  const gradientStyles = [
    // "linear-gradient(to right, #FF6E7F, #BFE9FF)", // Red and blue
    // "linear-gradient(to right, #FFA06D, #fffdfa)", // Orange and yellow
    "linear-gradient(to right, #f1f0fd, #ffffff)",
  ];

  const getRandomGradient = () => {
    const randomIndex = Math.floor(Math.random() * gradientStyles.length);
    return gradientStyles[randomIndex];
  };

  const textStyles = {
    backgroundImage: getRandomGradient(),
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "40px",
    fontWeight: "bold",
    textShadow: "1px 1px 2px rgba(255, 255, 255, 0.3)",
    marginBottom: "20px",
  };

  return <div style={textStyles}>{children}</div>;
};

export default TextComponent;
