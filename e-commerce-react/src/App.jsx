import styles from "./App.module.scss";
import HomePage from "./containers/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ProductPage from "./containers/ProductPage/ProductPage";
import { useEffect, useState } from "react";
import { getProducts, getShoppingCart } from "./services/products";
import ShoppingCartPage from "./containers/ShoppingCartPage/ShoppingCartPage";

function App() {
  const [products, setProducts] = useState([]);
  const [shopCart, setShopCart] = useState([]);

  const [clicked, setClicked] = useState(true);

  useEffect(() => {
    const renderProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };
    renderProducts();
  }, [clicked]);

  useEffect(() => {
    const renderCart = async () => {
      const allItems = await getShoppingCart();
      setShopCart(allItems);
    };
    renderCart();
  }, [clicked]);

  const handleRender = () => {
    setClicked(!clicked);
  };

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <NavBar data={shopCart} />
        <Routes>
          <Route path="/" element={<HomePage data={products} />} />
          <Route
            path="/:id"
            element={
              <ProductPage
                data={products}
                renderProdPage={handleRender}
                rerenderFavourite={handleRender}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <ShoppingCartPage
                data={shopCart}
                renderShoppingItem={handleRender}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
