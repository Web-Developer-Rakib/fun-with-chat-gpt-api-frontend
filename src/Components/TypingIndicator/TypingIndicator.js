import React from "react";
import "./TypingIndicator.css";
const TypingIndicator = () => {
  return (
    <div className="ticontainer my-3 ml-2">
      <div className="tiblock">
        <div className="tidot"></div>
        <div className="tidot"></div>
        <div className="tidot"></div>
      </div>
    </div>
  );
};

export default TypingIndicator;
