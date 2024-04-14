import React from "react";
import "../deals-of-week/deals.css"
import deals1 from "../../assets/dealsOfWeek/deals-img1.webp"
import deals2 from "../../assets/dealsOfWeek/deals-img2.avif"
import deals3 from "../../assets/dealsOfWeek/deals-img3.avif"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlusCircle } from "@fortawesome/free-solid-svg-icons";






const Deals=()=>{
    return(
        <>
         <section className="deals-of-week">
         <div className="card">
            <div className="card-img">
            
            <img src={deals1} alt="img 1">         
            </img>


            <div className="card_plus_icon">            
            <FontAwesomeIcon id="icon" icon={faPlusCircle} />
            </div>



            </div>
            <a href="/"><p>Tiny Thor</p></a>
            <div className="prices">
                <p className="discount-div">
                    -35%
                </p>
                <p className="cancle-amt">
                ₹719
                </p>
                <p className="discount-amt">
                ₹467.35
                </p>
            </div>
         </div>
         <div className="card">
            <div className="card-img">
            
            <img src={deals2} alt="img 1">         
            </img>


            <div className="card_plus_icon">            
            <FontAwesomeIcon id="icon" icon={faPlusCircle} />
            </div>



            </div>
            <a href="/"><p>Pacific Drive</p></a>
            <div className="prices">
                <p className="discount-div">
                    -20%
                </p>
                <p className="cancle-amt">
                ₹1,399
                </p>
                <p className="discount-amt">
                ₹1,119.20
                </p>
            </div>
         </div>
         <div className="card">
            <div className="card-img">
            
            <img src={deals3} alt="img 1">         
            </img>


            <div className="card_plus_icon">            
            <FontAwesomeIcon id="icon" icon={faPlusCircle} />
            </div>



            </div>
            <a href="/"><p>Check out all the deals for this week.</p></a>
            <div className="prices">
                
                <p className="discount-amt">
                Browse
                </p>
            </div>
         </div>
        </section>

        </>
    );
};
export default Deals

