import React from "react";
import CarouselPage from "../../components/CarouselPage/CarouselPage";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { useState, useEffect } from "react";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchProductsData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  };

  const renderProducts = async () => {
    const productArr = await fetchProductsData();

    const womensArr = productArr.filter((product) => {
      return product.category === "women's clothing";
    });
    setProducts(womensArr);
  };

  useEffect(() => {
    renderProducts();
  }, []);

  return (
    <div>
      <CarouselPage data={products} className={styles.HomePage} />
      <h1>ITEMS</h1>
      <ProductGrid data={products} />
    </div>
  );
};

export default HomePage;
