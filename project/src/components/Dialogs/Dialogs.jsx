import React from "react";
import classes from "./dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog +" " + classes.active}>Lidiya</div>
        <div className={classes.dialog}>Vladimir</div>
        <div className={classes.dialog}>Alex</div>
        <div className={classes.dialog}>Artyom</div>
        <div className={classes.dialog}>Egor</div>
        <div className={classes.dialog}>Alina</div>
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
