import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="sk-chase mx-auto w-fit">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  );
};

export default Spinner;
