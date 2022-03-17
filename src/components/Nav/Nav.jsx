import React from "react";
import styles from "./Nav.module.css";

const Nav = ({ options }) => {
  function handleClick() {
    console.log("This is a click");
  }

  return (
    <nav className={styles.nav}>
      {options.map((opt, index) => {
        return (
          <span onClick={handleClick} className={styles.option} key={index}>
            {opt}
            <span className={styles.arrow}>{" ➟"}</span>
          </span>
        );
      })}
    </nav>
  );
};

export default Nav;
