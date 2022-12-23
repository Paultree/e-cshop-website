import React from "react";
import styles from "./CarouselCard.module.scss";

const CarouselCard = ({ data }) => {
  const backgroundStyle = {
    backgroundImage: `url(${data.image})`,
    height: "45rem",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#242424",
  };

  return (
    <div style={backgroundStyle} className={styles.CarouselCard}>
      <h1>{data.name.toUpperCase()}</h1>
    </div>
  );
};

export default CarouselCard;
