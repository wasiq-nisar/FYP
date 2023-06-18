import React from "react";
import img from "./assets/errorpage.webp";
const Error = () => {
  return (
    <div className="w-full h-screen">
      <div>
        <img className="w-full h-screen" src={img} alt="error" />
      </div>
    </div>
  );
};

export default Error;
