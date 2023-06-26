import React from "react";
const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="face front">
        <img src={image} alt={title} />
        <h1 className="text-h1">{title}</h1>
      </div>
      <div className="face back">
        <h2 className="text-h2">{title}</h2>
        <p className="text-p">{description}</p>
        <div className="links">
          <a className="link-a" href="#">
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
