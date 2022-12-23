import React from "react";
import { useEffect, useState } from "react";
import styles from "./ProductPage.module.scss";
import { useParams } from "react-router-dom";

const ProductPage = ({ data }) => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const productData = data.find((prod) => prod.id === id);

    setProduct(productData);
  }, [id, data]);

  return product ? (
    <div className={styles.ProductPage}>
      <div className={styles.ProductImage}>
        <img src={product.image} />
      </div>
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h2>{`$${product.price}`}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="size">SIZE </label>
          <select id="size" name="size">
            {product.size &&
              product.size.map((size, index) => {
                return (
                  <option key={index} value={size}>
                    {size}
                  </option>
                );
              })}
          </select>
          <label htmlFor="quantity">QUANTITY</label>
          <input
            name="quantity"
            type="number"
            defaultValue={1}
            min={1}
            max={product.quantity}
          />
          <button>ADD TO CART</button>
        </form>
      </div>
    </div>
  ) : (
    <h1>PRODUCT DOES NOT EXIST</h1>
  );
};

export default ProductPage;
