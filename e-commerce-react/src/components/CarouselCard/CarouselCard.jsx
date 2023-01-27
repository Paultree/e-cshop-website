import React from "react";
import styles from "./CarouselCard.module.scss";

const CarouselCard = ({ data }) => {
  const backgroundStyle = {
    backgroundImage: `url(${data.image})`,
    height: "25rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#242424",
  };

  return (
    <div style={backgroundStyle} className={styles.CarouselCard}>
      <div className={styles.CarouselCard_Text}>
        <h1>{data.title}</h1>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default CarouselCard;
