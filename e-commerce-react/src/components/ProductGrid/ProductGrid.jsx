import React from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import styles from "./ProductGrid.module.scss";

const ProductGrid = ({ data }) => {
  return (
    <div className={styles.ProductGrid}>
      {data.map((product, index) => {
        return <ProductCard data={product} key={index} />;
      })}
    </div>
  );
};

export default ProductGrid;
