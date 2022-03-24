import React from "react";
import classes from "./../dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  return (
    <div className={classes.DialogItem + " " + classes.active}>
      <NavLink to={"messages/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default Dialog;
