import React from "react";
import "./SkeletonLoader.scss";

const SkeletonLoader = () => {
  return (
    <section
      className="skeleton grid-span"
      aria-label="Content is loading"
      role="alert"
      aria-live="polite"
      data-testid="skeleton-loader"
    >
      <div className="skeleton__header"></div>
      <div className="skeleton__body"></div>
      <div className="skeleton__footer"></div>
    </section>
  );
};

export default SkeletonLoader;
