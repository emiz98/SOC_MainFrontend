import "./events.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Events = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="BannerSlider">
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
  );
};

export default Events;
