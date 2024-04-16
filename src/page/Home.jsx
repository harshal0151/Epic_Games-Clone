

import React from "react";
import Heroslider from "../component/Sliders/Heroslider";
import FeaturedDiscounts from "../component/featuredDIs/FeaturedDis";
import Deals from "../component/deals-of-week/Deals";
import PopularSlider from "../component/popularSlider/PopularSlider";
import FreeGames from "../component/freeGames/FreeGames";


const Home = () =>{
    return(
        <>
       <Heroslider/>
       <FeaturedDiscounts/>
       <Deals/>
       <FreeGames/>
       <PopularSlider/>
        </>
            
          
        
    )
}

export default Home;