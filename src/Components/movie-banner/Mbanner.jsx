import { useEffect, useState } from "react";
import "./mbanner.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import requests from "../../requests";

const Mbanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <div className="BannerSlider">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <img src="/banner1.jpg" alt="" />
          <img src="/banner1.jpg" alt="" />
          <img src="/banner1.jpg" alt="" />
          <img src="/banner1.jpg" alt="" />
          <img src="/banner1.jpg" alt="" />
          <img src="/banner1.jpg" alt="" />
          <img src="/banner1.jpg" alt="" />
        </Slider>
      </div>
    </div>
  );
};

export default Mbanner;
