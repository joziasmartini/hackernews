import React from "react";
import "./styles.css";

const Nav = ({ options }) => {
  return (
    <nav className="nav">
      {options.map((opt) => {
        return (
          <a href="#" className="nav-option">
            {opt}
            <span className="nav-arrow">{" ➟"}</span>
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
