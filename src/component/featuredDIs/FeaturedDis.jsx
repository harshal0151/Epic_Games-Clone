import React from "react";
import { GameData } from "../constants";
import "../featuredDIs/featured_dis.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight ,faPlusCircle} from "@fortawesome/free-solid-svg-icons";


const FeaturedDiscounts = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    pauseOnHover: false,
  };

  return (
    <div className="Feature-container">
      <div className="feature-title">
        <a href="/brows">
          <span>
            Epic Sarving Spotlight{" "}
            <FontAwesomeIcon className="icon" icon={faAngleRight} />{" "}
          </span>{" "}
        </a>
      </div>

      <Slider {...settings}>
        {GameData.map((f) => (
          <div className="feature-card">
            <div className="feature-img">
              <img src={f.GameImg} alt="" />
              <div className="add-icon">
              <FontAwesomeIcon id="icon" icon={faPlusCircle} />
                </div>             
            </div>

            <div className="feature-content">
              <p>BASE GAME</p>
              <span>{f.GameName}</span>
              <div className="price-discount">
                <button>- {f.offer}</button>
                <h4>₹{f.Price}.00</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default FeaturedDiscounts;
