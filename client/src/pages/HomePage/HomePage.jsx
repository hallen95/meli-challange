import React from "react";
import useSEO from "../../hooks/useSEO";

const HomePage = () => {
  const seoData = {
    title: "Home Page - Meli Challenge",
    description: "Some random description",
    url: "https://www.localhost:3000.com/",
  };

  const helmet = useSEO(seoData);

  return <div>{helmet}</div>;
};

export default HomePage;
