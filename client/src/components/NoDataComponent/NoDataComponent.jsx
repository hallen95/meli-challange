import React from "react";
import "./NoDataComponent.scss";

const NoDataComponent = ({ message }) => {
  return (
    <section aria-labelledby="no-data-heading" className="no-data-container">
      <h2 id="no-data-heading">Notice</h2>
      <p>{message || "No data available."}</p>
    </section>
  );
};

export default NoDataComponent;
