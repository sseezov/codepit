import classes from "./../../users/users.module.css";
import spinee from "./../../../assets/images/Dual Ring-1s-200px.svg";
import React from "react";

let Preloader = (props) => {
  return <img className={classes.spinee} src={spinee} alt="spinee" />;
};

export default Preloader;
