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
      <img src={data.image} />
      <h1>{data.title.toUpperCase()}</h1>
      <div>
        <h3>{`$${data.price}`}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
