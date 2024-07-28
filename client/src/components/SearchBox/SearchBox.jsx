import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// css
import "./SearchBox.scss";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/items?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="search-box grid-span">
      <div className="search-box__container">
        <img src="/assets/Logo_ML.png" alt="logo" />
        <input
          name="searchTerm"
          type="text"
          className="search-box__input"
          placeholder="Nunca dejes de buscar..."
          aria-label="Search for products"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <button type="submit" className="search-box__button">
          <img src="/assets/ic_Search.png" alt="Icono de buscar" />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
