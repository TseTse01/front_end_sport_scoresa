import React from "react";
import Star from "./Star";

const EnglandContainer = () => {
  return (
    <div className="navbarCardContainer">
      <div className="items">
        <div className="left">
          <Star />
          <p>drapeau</p>
          <p>England: Premier League</p>
        </div>
        <div className="left">
          <p>Strandings</p>
        </div>
      </div>
    </div>
  );
};

export default EnglandContainer;
