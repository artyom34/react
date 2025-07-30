import React from "react";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKuHk3jgH4RIU996JDVTscAPtdP2Ysm7nTg&s" />
      <p>My Social Network</p>
    </header>
  );
};

export default Header;