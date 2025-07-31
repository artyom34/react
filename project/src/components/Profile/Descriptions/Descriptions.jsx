import React from "react";
import classes from "./descriptions.module.css";
import AvaDescription from "./AvaDescriptions/AvaDescription";
import UserDescription from "./UserDescriptions/UserDescription";

const Descriptions = () => {
  return (
    <div className={classes.descriptions}>
      <AvaDescription />
      <UserDescription />
    </div>
  );
};

export default Descriptions;
