import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const activeStyle = ({ isActive }) =>
    isActive
      ? `${styles.Nav_Link} ${styles.Link_Active}`
      : `${styles.Nav_Link}`;
  return (
    <nav>
      <h1>PROJECT CLOTHING</h1>
      <NavLink className={activeStyle} to="/">
        HOME
      </NavLink>
      <NavLink className={activeStyle} to="/cart">
        CART
      </NavLink>
    </nav>
  );
};

export default NavBar;
