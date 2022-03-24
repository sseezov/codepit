import React from "react";
import classes from "./nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className={classes.nav}>
        <li className={classes.item}>
          <NavLink
            to="/profile"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            Profile
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/messages"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            Messages
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/users"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            Users
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/news"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            News
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavLink
            to="/settings"
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
