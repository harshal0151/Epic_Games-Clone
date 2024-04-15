import React from "react";
import "../page_styles/popular.css";
import { PopularData } from "../component/constants";



const popular = () => {
  return (
    <>
      <div className="popular">
       <div className="popular-heading">
       <h1>Most Popular Games</h1>
       </div>
        <div className="popular-container">
          {PopularData.map((g) => (
            <div className="brows-card">
              <div className="brows-img">
                <img src={g.GameImg} alt="" />
              </div>
              <div className="brows-content">
                <p>BASE GAME</p>
                <span>{g.GameName}</span>
                <div className="price-discount">
                  <h4>₹{g.Price}.00</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default popular;
