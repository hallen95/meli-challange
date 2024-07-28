import React from "react";
import "./BreadCrumb.scss";

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${
              index === items.length - 1 ? "active" : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
