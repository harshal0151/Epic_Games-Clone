import React from "react";
import { PopularData } from "../constants";
import "../popularSlider/popular-slider.css"
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight ,faPlusCircle} from "@fortawesome/free-solid-svg-icons";


const PopularSlider = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    pauseOnHover: false,
  };

  return (
    <div className="PopularSlider-container">
      <div className="PopularSlider-title">
        <a href="/popular">
          <span>
          Most Popular{" "}
            <FontAwesomeIcon className="icon" icon={faAngleRight} />{" "}
          </span>{" "}
        </a>
      </div>

      <Slider {...settings}>
        {PopularData.map((p) => (
          <div className="PopularSlider-card">
            <div className="PopularSlider-img">
              <img src={p.GameImg} alt="" />
              <div className="add-icon">
              <FontAwesomeIcon id="icon" icon={faPlusCircle} />
                </div>             
            </div>

            <div className="PopularSlider-content">
              <p>BASE GAME</p>
              <span>{p.GameName}</span>
              <div className="PopularSlider-discount">
                <h4>₹{p.Price}.00</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default PopularSlider;
