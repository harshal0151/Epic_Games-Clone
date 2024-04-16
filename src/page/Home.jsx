

import React from "react";
import Heroslider from "../component/Sliders/Heroslider";
import FeaturedDiscounts from "../component/featuredDIs/FeaturedDis";
import Deals from "../component/deals-of-week/Deals";
import FreeGames from "../component/freeGames/FreeGames";

const Home = () =>{
    return(
        <>
       <Heroslider/>
       <FeaturedDiscounts/>
       <Deals/>
       <FreeGames/>
        </>
            
          
        
    )
}

export default Home;