import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = ({ data }) => {
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
        CART {data.length > 0 ? `- ${data.length}` : ""}
      </NavLink>
    </nav>
  );
};

export default NavBar;
