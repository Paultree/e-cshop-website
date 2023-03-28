import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = ({ data }) => {
  const activeStyle = ({ isActive }) =>
    isActive
      ? `${styles.Nav_Link} ${styles.Link_Active}`
      : `${styles.Nav_Link}`;

  return (
    <nav className={styles.NavBar}>
      <h1>P R _ J E C T C L _ T H I N G</h1>
      <NavLink className={activeStyle} to="/">
        HOME
      </NavLink>
      <NavLink className={activeStyle} to="/favourites">
        FAVOURITES
      </NavLink>
      <NavLink className={activeStyle} to="/cart">
        CART {data.length > 0 ? `- ${data.length}` : ""}
      </NavLink>
    </nav>
  );
};

export default NavBar;
