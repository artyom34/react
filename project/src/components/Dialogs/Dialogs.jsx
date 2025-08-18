import React from "react";
import classes from "./dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <Dialog id="1" name="Lidiya" />
        <Dialog id="2" name="Vladimir" />
        <Dialog id="3" name="Alex" />
        <Dialog id="4" name="Artyom" />
        <Dialog id="5" name="Egor" />
        <Dialog id="6" name="Alina" />
      </div>
      <div className={classes.messages}>
        <Message message="Hello, how are you?" />
        <Message message="I am fine, thank you!" /> 
        <Message message="What about you?" />
        <Message message="I am doing well, thanks!" />
        <Message message="Let's meet up soon." />
        <Message message="Sure, that sounds great!" />
      </div>
    </div>
  );
};

export default Dialogs;
