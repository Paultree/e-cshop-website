import React from "react";
import CarouselPage from "../../components/CarouselPage/CarouselPage";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { useState, useEffect } from "react";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const [carouselProducts, setCarouselProducts] = useState([]);
  const [gridProducts, setGridProducts] = useState([]);

  const fetchProductsData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  };

  const renderProducts = async () => {
    const productArr = await fetchProductsData();
    setGridProducts(productArr);
    const carouselArr = productArr.filter((product) => {
      return product.id < 6;
    });
    setCarouselProducts(carouselArr);
  };

  useEffect(() => {
    renderProducts();
  }, []);

  return (
    <div>
      <CarouselPage data={carouselProducts} className={styles.HomePage} />
      <h1>ITEMS</h1>
      <ProductGrid data={gridProducts} />
    </div>
  );
};

export default HomePage;
