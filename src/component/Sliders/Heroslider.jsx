import React from "react";
import SliderImg from "../../assets/asset 0.jpeg";
import "../Sliders/hero_slider.css";
import sliderLogo from "../../assets/asset 85.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Heroslider = () => {

  return (
   
    <div className="hero-slider">
      <div className="slider-img">
        <img src={SliderImg} alt="" />
      </div>
      
      <div className="img-contand">
        <div className="contend">
          <img src={sliderLogo} alt="" />
          <div>
            <span>comming soon</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              repudiandae quia eligendi tempore iure impedit qui, exercitationem
              esse assumenda voluptate!
            </p>
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
        <ul>
          <li>
            <div className="list-card">
              <img src={SliderImg} alt="" />
              <h5>Horizon Foribidden</h5>
            </div>
          </li>
          <li>
            {" "}
            <div className="list-card">
              <img src={SliderImg} alt="" />
              <h5>Horizon Foribidden</h5>
            </div>
          </li>
          <li>
            {" "}
            <div className="list-card">
              <img src={SliderImg} alt="" />
              <h5>Horizon Foribidden</h5>
            </div>
          </li>
          <li>
            {" "}
            <div className="list-card">
              <img src={SliderImg} alt="" />
              <h5>Horizon Foribidden</h5>
            </div>
          </li>
          <li>
            {" "}
            <div className="list-card">
              <img src={SliderImg} alt="" />
              <h5>Horizon Foribidden</h5>
            </div>
          </li>
          <li>
            {" "}
            <div className="list-card">
              <img src={SliderImg} alt="" />
              <h5>Horizon Foribidden</h5>
            </div>
          </li>
        </ul>
      </div>
    </div>
   
  );
};
export default Heroslider;
