import React from "react";
import "../Styles/ButtonDark.scss";

function ButtonDark({ children }) {
  return (
    <div className="btn-dark">
      <p>{children}</p>
    </div>
  );
}

export default ButtonDark;
