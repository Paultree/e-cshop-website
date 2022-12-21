import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselCard from "../CarouselCard/CarouselCard";
import styles from "./CarouselPage.module.scss";

const CarouselPage = ({ data }) => {
  return (
    <Carousel
      autoPlay
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      transitionTime={1500}
      showStatus={false}
      className={styles.CarouselPage}
    >
      {data.map((product, index) => {
        return <CarouselCard data={product} key={index} />;
      })}
    </Carousel>
  );
};

export default CarouselPage;
