import React from "react";
import classes from "./dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

let dialogs = [
  { id: 1, name: "Lidiya" },
  { id: 2, name: "Vladimir" },
  { id: 3, name: "Alex" },
  { id: 4, name: "Artyom" },
  { id: 5, name: "Egor" },
  { id: 6, name: "Alina" },
];

let messages = [
  { id: 1, message: "Hello, how are you?" },
  { id: 2, message: "I am fine, thank you!" },
  { id: 3, message: "What about you?" },
  { id: 4, message: "I am doing well, thanks!" },
  { id: 5, message: "Let's meet up soon." },
  { id: 6, message: "Sure, that sounds great!" },
];

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <Dialog id={dialogs[0].id} name={dialogs[0].name} />
        <Dialog id={dialogs[1].id} name={dialogs[1].name} />
        <Dialog id={dialogs[2].id} name={dialogs[2].name} />
        <Dialog id={dialogs[3].id} name={dialogs[3].name} />
        <Dialog id={dialogs[4].id} name={dialogs[4].name} />
        <Dialog id={dialogs[5].id} name={dialogs[5].name} />
      </div>
      <div className={classes.messages}>
        <Message message={messages[0].message} />
        <Message message={messages[1].message} />
        <Message message={messages[2].message} />
        <Message message={messages[3].message} />
        <Message message={messages[4].message} />
        <Message message={messages[5].message} />
      </div>
    </div>
  );
};

export default Dialogs;
