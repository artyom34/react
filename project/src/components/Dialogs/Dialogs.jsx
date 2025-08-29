import React from "react";
import classes from "./dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsInfo = props.dialogsData.users.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} />
  ));
  let messagesInfo = props.dialogsData.messages.map((message) => (
    <Message id={message.id} message={message.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsInfo}</div>
      <div className={classes.messages}>{messagesInfo}</div>
    </div>
  );
};

export default Dialogs;
