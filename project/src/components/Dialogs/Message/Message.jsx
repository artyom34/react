import React from "react";
import classes from "./message.module.css";

const Message = (props) => {
  let createRef = React.createRef();

  let addMessage = () => {
    let text = createRef.current.value;

    props.addNewMessage(text);
  };

  return (
    <div className={classes.message}>
      <div className={classes.messageItem}> {props.message}</div>
      <div>
        <textarea ref={createRef} placeholder="Enter your message"></textarea>{" "}
        <br />
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  );
};

export default Message;
