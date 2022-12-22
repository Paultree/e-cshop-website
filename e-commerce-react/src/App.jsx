import styles from "./App.module.scss";
import HomePage from "./containers/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ProductPage from "./containers/ProductPage/ProductPage";
import { useEffect, useState } from "react";

function App() {
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
    <div className={styles.App}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage data={products} />} />
          <Route path="/:id" element={<ProductPage data={products} />} />
          {/* <Route path='/cart' element={<ShoppingCart />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
