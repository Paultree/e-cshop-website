import styles from "./App.module.scss";
import HomePage from "./containers/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ProductPage from "./containers/ProductPage/ProductPage";
import { useEffect, useState } from "react";
import { getProducts } from "./services/products";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const renderProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };
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
