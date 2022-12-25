import React, { useEffect } from "react";
import { getFavourite, updateFavourited } from "../../services/products";
import { useState } from "react";
import styles from "./FavouriteButton.module.scss";

const FavouriteButton = ({ data, clicked }) => {
  const fave = data.favourited ? "Favourited" : "Favourite";

  const faveClass = data.favourited ? styles.Favourited : styles.NotFavourited;

  const handleClick = async () => {
    await updateFavourited(data);
    clicked();
  };

  return (
    <>
      <button className={faveClass} onClick={handleClick}>
        {fave}
      </button>
    </>
  );
};

export default FavouriteButton;
