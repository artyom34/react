import React from "react";
import classes from "./userDescription.module.css";

const UserDescription = () => {
  return (
    <div className={classes.user_description}>
      <label className={classes.user_name} htmlFor="name">
        Cheremisin A.
      </label>
      <br></br>
      <label htmlFor="city">City: Kharkiv</label>
      <br></br>
      <label htmlFor="education">Education: Magister</label>
      <br></br>
      <label htmlFor="email">email: art.cheremisin@gmail.com</label>
    </div>
  );
};

export default UserDescription;
