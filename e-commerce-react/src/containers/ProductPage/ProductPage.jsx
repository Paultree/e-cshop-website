import React from "react";
import { useEffect, useState } from "react";
import styles from "./ProductPage.module.scss";
import { useParams } from "react-router-dom";
import { addToCart } from "../../services/products";
import FavouriteButton from "../../components/FavouriteButton/FavouriteButton";

const ProductPage = ({ data, clicked, updateRender }) => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const productData = data.find((prod) => prod.id === id);

    setProduct(productData);
  }, [data, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productForm = {
      id: product.id,
      title: product.title,
      price: Number(product.price),
      image: product.image,
      quantity: Number(e.target.quantity.value),
      size: e.target.size.value,
    };

    await addToCart(productForm);
    return updateRender();
  };

  return product ? (
    <div className={styles.ProductPage}>
      <div className={styles.ProductImage}>
        <img src={product.image} />
        <FavouriteButton data={product} clicked={clicked} />
      </div>
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h2>{`$${product.price}`}</h2>
        <form onSubmit={handleSubmit}>
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
            id="quantity"
            type="number"
            defaultValue={1}
            min={1}
            max={product.quantity}
          />
          <div>
            {product.quantity > 0 ? (
              <button>ADD TO CART</button>
            ) : (
              <button disabled={true}>SOLD OUT</button>
            )}
          </div>
        </form>
      </div>
    </div>
  ) : (
    <h1>PRODUCT DOES NOT EXIST</h1>
  );
};

export default ProductPage;
