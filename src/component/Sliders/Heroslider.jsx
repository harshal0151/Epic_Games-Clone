import React, { useState } from "react";
import "../Sliders/hero_slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from "../constants";
import Slider from "react-slick";

const Heroslider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    speed: 2000,
    autoplaySpeed: 5000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const handleSliderHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <>
      <div className="container">
        <div className="slider">
          <Slider {...settings}>
            {SliderData.map((s, index) => (
              <div
                key={index}
                className="hero-slider"
                onMouseEnter={() => handleSliderHover(index)}
                onMouseLeave={() => handleSliderHover(null)}
              >
                <div className="slider-img">
                  <img src={s.sliderImg} alt="" />
                </div>
                <div className="img-contand">
                  <div className="contend">
                    <img src={s.sliderLogo} alt="/" />
                    <div>
                      <p>{s.info}</p>
                    </div>

                    <div className="btn-group">
                      <span>starting at ₹ {s.price}/-</span>
                      <button>Wishlist Now</button>
                      <button id="wishlist">
                        <FontAwesomeIcon
                          className="add"
                          icon={faCirclePlus}
                        />
                        Add To Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="slider-list">
          {SliderData.map((sd, index) => (
            <div
              key={index}
              className={`list-card ${hoveredIndex === index ? "hovered" : ""}`}
              onMouseEnter={() => handleSliderHover(index)}
              onMouseLeave={() => handleSliderHover(null)}
            >
              <img src={sd.sliderImg} alt="" />
              <h5>{sd.sliderTitle}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Heroslider;
