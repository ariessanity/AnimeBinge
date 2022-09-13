import React from "react";
import "../Styles/ButtonLight.scss";

function ButtonLight({ children }) {
  return (
    <div className="btn-light">
      <p>{children}</p>
    </div>
  );
}

export default ButtonLight;
