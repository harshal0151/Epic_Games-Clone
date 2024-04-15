

import React from "react";
import Heroslider from "../component/Sliders/Heroslider";
import FeaturedDiscounts from "../component/featuredDIs/FeaturedDis";
import Deals from "../component/deals-of-week/Deals";
import PopularSlider from "../component/popularSlider/PopularSlider";

const Home = () =>{
    return(
        <>
       <Heroslider/>
       <FeaturedDiscounts/>
       <Deals/>
       <PopularSlider/>
        </>
            
          
        
    )
}

export default Home;