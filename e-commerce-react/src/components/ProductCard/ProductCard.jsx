import React from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ data }) => {
  return (
    <div
      className={styles.ProductCard}
      onClick={() => {
        console.log(data);
      }}
    >
      <div>
        <img src={data.image} />
      </div>
      <div className={styles.ProductDetails}>
        <h1>{data.title.toUpperCase()}</h1>
        <h3>{`$${data.price}`}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
