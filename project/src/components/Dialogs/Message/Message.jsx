import React from "react";
import classes from "./message.module.css";

const Message = (props) => {
  return (
    <div className={classes.message}>
      <div className={classes.messageItem}> {props.message}</div>
      <div>
        <textarea placeholder="Enter your message"></textarea> <br />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Message;
