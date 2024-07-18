import React from "react";
import "./index.css";

const Card = ({ title, description, buttonText, onClick, iconSrc }) => {
  return (
    <div className="card">
      <div className="content">
        <p className="heading">{title}</p>
        <div className="card-icon">
          <img src={iconSrc} />
        </div>
        <p className="para">{description}</p>
        <button className="btn" onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
