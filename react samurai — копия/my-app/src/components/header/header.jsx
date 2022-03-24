import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        className={classes.imgLogo}
        src="https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/cat-behaviour.jpg"
        alt="catter"
      />
      <span className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"./login"}>Login</NavLink>}
      </span>
      <div>{props.email}</div>
    </header>
  );
};

export default Header;
