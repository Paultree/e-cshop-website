import React, { useEffect } from "react";
import { getFavourite, updateFavourited } from "../../services/products";
import { useState } from "react";

const FavouriteButton = ({ data, clicked }) => {
  const fave = data.favourited ? "Favourited" : "Favourite";

  const handleClick = async () => {
    clicked();
    await updateFavourited(data);

    const stat = await getFavourite(data);
    console.log(stat);
  };

  return (
    <>
      <button onClick={handleClick}>{fave}</button>
    </>
  );
};

export default FavouriteButton;
