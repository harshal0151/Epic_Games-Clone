import React from "react";
import Slider from "react-slick";
import "../page_styles/brows.css";
import { GameData } from "../component/constants";
import {  faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Brows = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    pauseOnHover: false,
  };


  return (
    <>
      <div className="brows">

        {/* <div className="popular">
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
        </div> */}

       <div className="show-list">
       <p>Shows:</p>
        <select name="" id="">
          <option value="new">New Release</option>
          <option value="all">All</option>
          <option value="soon">Coming Soon</option>
          <option value="Alphabetical">Alphabetical</option>
          <option value="High">Price: High to Low</option>
          <option value="Low">Price: Low to High</option>
        </select>
       </div>
        
        <div  className="game-container">
        <div className="brows-container">
          {GameData.map((g) => (
            <div className="brows-card">
              <div className="brows-img">
                <img src={g.GameImg} alt="" />
              </div>
              <div className="brows-content">
                <p>BASE GAME</p>
                <span>{g.GameName}</span>
                <div className="price-discount">
                  <button>- {g.offer}</button>
                  <h4>₹{g.Price}.00</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="filter-container">
         <p>Hello</p>
        </div>
        </div>
      
      </div>
    </>
  );
};

export default Brows;
