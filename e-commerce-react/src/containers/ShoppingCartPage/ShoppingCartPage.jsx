import React from "react";
import ShoppingCartItem from "../../components/ShoppingCartItem/ShoppingCartItem";
import styles from "./ShoppingCartPage.module.scss";

const ShoppingCartPage = ({ data, renderShoppingItem }) => {
  console.log(data);
  return data.length > 0 ? (
    <div className={styles.ShoppingCartPage}>
      {data.map((item, index) => {
        return (
          <ShoppingCartItem
            key={index}
            data={item}
            renderShoppingItem={renderShoppingItem}
          />
        );
      })}
      <h2>
        Total Price: $
        {data
          .map((item) => {
            return item.quantity * item.price;
          })
          .reduce((total, accum) => {
            return total + accum;
          }, 0)}
      </h2>
    </div>
  ) : (
    <div className={styles.ShoppingCartPage}>
      THERE IS CURRENTLY NOTHING IN YOUR CART.
    </div>
  );
};

export default ShoppingCartPage;
