import styles from "./App.module.scss";
import HomePage from "./containers/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ProductPage from "./containers/ProductPage/ProductPage";
import { useEffect, useState } from "react";
import { getProducts } from "./services/products";
import ShoppingCartProvider from "./context/ShoppingCartContext";

function App() {
  const [products, setProducts] = useState([]);

  const [clicked, setClicked] = useState(0);

  useEffect(() => {
    const renderProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };
    renderProducts();
  }, [clicked]);

  const handleRender = () => {
    setClicked(clicked + 1);
    console.log(clicked);
  };

  return (
    <ShoppingCartProvider>
      <div className={styles.App}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage data={products} />} />
            <Route
              path="/:id"
              element={<ProductPage data={products} clicked={handleRender} />}
            />
            {/* <Route path='/cart' element={<ShoppingCart />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
