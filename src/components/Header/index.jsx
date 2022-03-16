import React from "react";
import "./styles.css";

const Header = ({ title, subtitle }) => {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <p className="header-subtitle">{subtitle}</p>
    </header>
  );
};

export default Header;
