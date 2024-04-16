import React from "react";
import Slider from "react-slick";
import "../page_styles/brows.css";
import { GameData } from "../component/constants";
// import {  faPlusCircle} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Brows = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 5,
    pauseOnHover: false,
  };


  return (
    <>
      <div className="brows">
      <h3>Popular Genres</h3>

        <Slider {...settings}> 
        {GameData.map ((p) => (
         <div className="popular">
         <div  class="popular-card" >
         <div className="popular-img">
          <img src={p.GameImg}  alt="Image1" class="image1" />
          <img src={p.GameImg1}  alt="Image1" class="image2" />
          <img src={p.GameImg2}  alt="Image1" class="image3" />
         </div >
         <div className="popular-text">
          <p>{p.type}</p>
          </div>
         </div>
         
          </div>
        ))}
       
        </Slider>
        

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
                  <button>-{g.offer}</button>
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
