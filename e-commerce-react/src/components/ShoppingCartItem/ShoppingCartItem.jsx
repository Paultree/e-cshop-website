import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  maxCart,
  updateCartQuantity,
  deleteItem,
} from "../../services/products";
import styles from "./ShoppingCartItem.module.scss";

const ShoppingCart = ({ data, fullRender }) => {
  const [cartQuan, setCartQuan] = useState(0);

  const [render, setRender] = useState(false);

  const rerender = () => {
    setRender(!render);
  };

  useEffect(() => {
    const wrapper = async () => {
      const number = await maxCart(data);
      setCartQuan(number);
    };
    wrapper();
  }, []);

  const updateQuantity = async (e) => {
    e.preventDefault();
    const update = await updateCartQuantity(data, e.target.quantity.value);
    setCartQuan(update);
    rerender();
    fullRender();
  };

  const handleDelete = async () => {
    await deleteItem(data);
    rerender();
    fullRender();
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

export default ShoppingCart;
