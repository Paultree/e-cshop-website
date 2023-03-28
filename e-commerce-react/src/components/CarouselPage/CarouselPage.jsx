import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselCard from "../CarouselCard/CarouselCard";
import styles from "./CarouselPage.module.scss";
import {
  carouselOne,
  carouselTwo,
  carouselThree,
  carouselFour,
  carouselFive,
} from "../../assets/carousel";

const CarouselPage = () => {
  const carouselImages = [
    carouselOne,
    carouselTwo,
    carouselThree,
    carouselFour,
    carouselFive,
  ];

  return (
    <Carousel
      autoPlay
      showArrows={false}
      showThumbs={false}
      infiniteLoop={true}
      transitionTime={1500}
      showStatus={false}
      className={styles.CarouselPage}
    >
      {carouselImages.map((data, index) => {
        return <CarouselCard data={data} key={index} />;
      })}
    </Carousel>
  );
};

export default CarouselPage;
