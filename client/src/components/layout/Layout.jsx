import React from "react";
import SearchBox from "../SearchBox/SearchBox";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="wrapper">
        <header className="container">
          <SearchBox />
        </header>
      </div>
      <main className="container">{children}</main>
    </div>
  );
};

export default Layout;
