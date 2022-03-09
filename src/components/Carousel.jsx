import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carrusel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="carrusel">
        <h3>Contenido 1</h3>
      </div>
      <div>
        <h3>Contenido 2</h3>
      </div>
      <div>
        <h3>Contenido 3</h3>
      </div>
    </Slider>
  );
};

export default Carrusel;
