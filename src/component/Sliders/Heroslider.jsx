import React from "react";
import "../Sliders/hero_slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { SliderData } from "../constants";
// import Slider from "react-slick";

const Heroslider = () => {
  // const settings = {
  //   arrows: false,
  //   dots: true,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 2500,
  //   swipeToSlide: true,
  //   autoplaySpeed: 200,
  //   slidesToShow: 1,
  // };

  return (
    <>
      {SliderData.map((s) => (
        <div className="hero-slider">
          <div className="slider-img">
            <img src={s.sliderImg} alt="" />
          </div>
          <div className="img-contand">
            <div className="contend">
              <img src={s.sliderLogo} alt="/" />
              <div>
                <span>comming soon</span>
                <p>{s.info}</p>
              </div>
              <div className="btn-group">
                <button>Wishlist Now</button>
                <button id="wishlist">
                  <FontAwesomeIcon className="add" icon={faCirclePlus} />
                  Add To Wishlist
                </button>
              </div>
            </div>
          </div>

          <div className="slider-list">
            {SliderData.map((s) => (
              <div key={s.id} className="list-card">
                <img src={s.sliderImg} alt="" />
                <h5>{s.sliderTitle}</h5>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
export default Heroslider;
