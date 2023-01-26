import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  renderMaxCart,
  updateCartQuantity,
  deleteCartItem,
} from "../../services/products";
import styles from "./ShoppingCartItem.module.scss";

const ShoppingCartItem = ({ data, renderShoppingItem }) => {
  const [cartQuan, setCartQuan] = useState(0);

  useEffect(() => {
    const wrapper = async () => {
      const number = await renderMaxCart(data);
      setCartQuan(number);
    };
    wrapper();
  }, []);

  const updateQuantity = async (e) => {
    e.preventDefault();
    const update = await updateCartQuantity(data, e.target.quantity.value);
    setCartQuan(update);
    renderShoppingItem();
  };

  const handleDelete = async () => {
    await deleteCartItem(data);
    renderShoppingItem();
  };

  return (
    <div className={styles.ShoppingCartItem}>
      <div>
        <img src={data.image} />
      </div>
      <div>
        <h1>{data.title}</h1>
        <h3>SIZE: {data.size}</h3>
        <h3>PRICE: ${data.quantity * data.price}</h3>
      </div>
      <div>
        <form onSubmit={updateQuantity}>
          <label htmlFor="quantity">QUANTITY:</label>
          <input
            name="quantity"
            type="number"
            min={1}
            max={cartQuan}
            defaultValue={data.quantity}
          />
          <button>Update</button>
        </form>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
