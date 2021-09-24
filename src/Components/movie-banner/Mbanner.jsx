import { useEffect, useState } from "react";
import "./mbanner.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import requests from "../../requests";
import axios from "axios";

const Mbanner = () => {
  const [banners, setBanners] = useState([]);

  const base_url = "http://localhost:8080/assets/banners/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("http://localhost:8080/api/v1/banners");
      setBanners(request.data);
      return request;
    }
    fetchData();
  }, []);

  console.log(banners);

  const settings = {
    dots: false,
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
        <Slider {...settings}>
          {banners.map((banner) => (
            <img
              key={banner.id}
              src={`${base_url}${banner.banner_image}`}
              alt=""
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Mbanner;
