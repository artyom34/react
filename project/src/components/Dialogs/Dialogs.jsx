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

let dialogsInfo = dialogs.map((dialog) => (
  <Dialog id={dialog.id} name={dialog.name} />
));

let messages = [
  { id: 1, message: "Hello, how are you?" },
  { id: 2, message: "I am fine, thank you!" },
  { id: 3, message: "What about you?" },
  { id: 4, message: "I am doing well, thanks!" },
  { id: 5, message: "Let's meet up soon." },
  { id: 6, message: "Sure, that sounds great!" },
];

let messagesInfo = messages.map((message) => (
  <Message id={message.id} message={message.message} />
));

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsInfo}</div>
      <div className={classes.messages}>{messagesInfo}</div>
    </div>
  );
};

export default Dialogs;
