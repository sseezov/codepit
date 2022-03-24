import React from "react";
import classes from "./../dialogs.module.css";

const Message = (props) => {
  return (
    <div className={classes.message}>
      <div className={classes.messageHistory}>{props.message}</div>
    </div>
  );
};

export default Message;
