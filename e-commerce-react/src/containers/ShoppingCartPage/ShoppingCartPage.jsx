import React from "react";
import ShoppingCart from "../../components/ShoppingCartItem/ShoppingCartItem";

const ShoppingCartPage = ({ data, productData, fullRender }) => {
  return data.length > 0 ? (
    <div>
      {data.map((item, index) => {
        return <ShoppingCart key={index} data={item} fullRender={fullRender} />;
      })}
    </div>
  ) : (
    <div>NOTHING IN YOUR CART AT THE MOMENT.</div>
  );
};

export default ShoppingCartPage;
