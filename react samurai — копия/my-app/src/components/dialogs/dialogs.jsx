import React from "react";
import classes from "./dialogs.module.css";
import Message from "./Message/message";
import Dialog from "./dialogItem/dialogItem";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let DialogsElement = state.dialogsData.map((d) => (
    <Dialog name={d.name} key={d.id} id={d.id} />
  ));
  let MessagesElement = state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} id={m.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (event) => {
    let body = event.target.value; //это то сообщение, которое введено в текстареа
    props.updateNewMessageBody(body);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={classes.Dialogs}>
      <div className={classes.DialogItems}>{DialogsElement}</div>
      <div className={classes.Messages}>
        <div>{MessagesElement}</div>
        <div>
          <div>
            <textarea
              placeholder="message"
              value={newMessageBody}
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
