import React from "react";
import "./ErrorComponent.scss";

const ErrorComponent = ({ message }) => {
  return (
    <aside aria-live="assertive" className="error-container grid-span">
      <p role="alert">{message || "An unexpected error has occurred."}</p>
    </aside>
  );
};

export default ErrorComponent;
