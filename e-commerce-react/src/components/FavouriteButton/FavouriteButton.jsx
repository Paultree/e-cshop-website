import { updateFavourited } from "../../services/products";

import styles from "./FavouriteButton.module.scss";

const FavouriteButton = ({ data, rerenderFavourite }) => {
  const fave = data.favourited ? "FAVOURITED" : "FAVOURITE";

  const faveClass = data.favourited ? styles.Favourited : styles.NotFavourited;

  const handleClick = async () => {
    await updateFavourited(data);
    rerenderFavourite();
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
