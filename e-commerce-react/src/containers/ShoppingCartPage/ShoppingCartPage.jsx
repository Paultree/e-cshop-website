import React from "react";
import ShoppingCart from "../../components/ShoppingCartItem/ShoppingCartItem";

const ShoppingCartPage = ({ data, fullRender }) => {
  console.log(data);
  return data.length > 0 ? (
    <div>
      {data.map((item, index) => {
        return <ShoppingCart key={index} data={item} fullRender={fullRender} />;
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
    <div>THERE IS CURRENTLY NOTHING IN YOUR CART.</div>
  );
};

export default ShoppingCartPage;
