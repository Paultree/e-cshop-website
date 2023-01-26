import React from "react";
import styles from "./ProductCard.module.scss";
import { NavLink } from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <NavLink to={`/${data.id}`} className={styles.ProductCard}>
      <div>
        <img src={data.image} />
      </div>
      <div className={styles.ProductDetails}>
        <h4>{data.title.toUpperCase()}</h4>
        <p>{`$${data.price}`}</p>
      </div>
    </NavLink>
  );
};

export default ProductCard;
