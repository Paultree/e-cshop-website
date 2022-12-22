import React from "react";
import CarouselPage from "../../components/CarouselPage/CarouselPage";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { useState, useEffect } from "react";
import styles from "./HomePage.module.scss";

const HomePage = ({ data }) => {
  return (
    <div>
      <h1>FEATURED</h1>
      <CarouselPage data={data} className={styles.HomePage} />
      <h1>PRODUCTS</h1>
      <ProductGrid data={data} />
    </div>
  );
};

export default HomePage;
