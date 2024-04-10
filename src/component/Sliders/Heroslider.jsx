import React from "react";
import "../Sliders/hero_slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from "../constants";
import Slider from "react-slick";

const Heroslider = () => {
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

  return (
    <>
  
      <Slider {...settings}> 
      {SliderData.map((s) => (
        <div className="hero-slider">
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
                  <FontAwesomeIcon className="add" icon={faCirclePlus} />
                  Add To Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </Slider>
        <div className="slider-list">
            {SliderData.map((sd) => (
              <div  className="list-card">
                <img src={sd.sliderImg} alt="" />
                <h5>{sd.sliderTitle}</h5>
              </div>
            ))}
          </div> 
          
    </>
  );
};
export default Heroslider;
