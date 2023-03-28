import React from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import styles from "./FavouritePage.module.scss";

const FavouritePage = ({ data }) => {
  return (
    <div className={styles.FavouritePage}>
      <ProductGrid data={data} />
    </div>
  );
};

export default FavouritePage;
