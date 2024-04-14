import React from "react";
import "../page_styles/brows.css";
import { GameData } from "../component/constants";

const Brows = () => {
  return (
    <>
      <div className="brows">
       <div className="show-list">
       <p>Shows:</p>
        <select name="programmingLanguage" id="programmingLanguage">
          <option value="python">All</option>
          <option value="javascript">New Release</option>
          <option value="java">Coming Soon</option>
          <option value="c++">Alphabetical</option>
          <option value="ruby">Price: High to Low</option>
          <option value="ruby">Price: Low to High</option>
        </select>
       </div>

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
      </div>
    </>
  );
};

export default Brows;
