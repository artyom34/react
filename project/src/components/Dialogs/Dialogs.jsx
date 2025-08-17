import React from "react";
import classes from "./dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog + " " + classes.active}>
          <NavLink to="/dialog/1">Lidiya</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialog/2">Vladimir</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialog/3">Alex</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialog/4">Artyom</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialog/5">Egor</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to="/dialog/6">Alina</NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hello, how are you?</div>
        <div className={classes.message}>Hello, what is yoy name?</div>
        <div className={classes.message}>How old are you?</div>
      </div>
    </div>
  );
};

export default Dialogs;
