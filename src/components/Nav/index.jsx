import React from "react";
import "./styles.css";

const Nav = ({ options }) => {
  function handleClick() {
    console.log("This is a click");
  }

  return (
    <nav className="nav">
      {options.map((opt, index) => {
        return (
          <span onClick={handleClick} className="nav-option" key={index}>
            {opt}
            <span className="nav-arrow">{" ➟"}</span>
          </span>
        );
      })}
    </nav>
  );
};

export default Nav;
