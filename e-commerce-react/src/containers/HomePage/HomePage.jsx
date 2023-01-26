import React from "react";
import CarouselPage from "../../components/CarouselPage/CarouselPage";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import styles from "./HomePage.module.scss";

const HomePage = ({ data }) => {
  return (
    <div className={styles.HomePage}>
      <CarouselPage />
      <div className={styles.HomePage_Grid}>
        <h1>PRODUCTS</h1>
        <ProductGrid data={data} />
      </div>
    </div>
  );
};

export default HomePage;
