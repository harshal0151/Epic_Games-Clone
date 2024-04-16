

import React from "react";
import Heroslider from "../component/Sliders/Heroslider";
import FeaturedDiscounts from "../component/featuredDIs/FeaturedDis";
import Deals from "../component/deals-of-week/Deals";
import PopularSlider from "../component/popularSlider/PopularSlider";
import FreeGames from "../component/freeGames/FreeGames";
import Experiences from "../component/fortniteExperiences/Experiences";


const Home = () =>{
    return(
        <>
       <Heroslider/>
       <FeaturedDiscounts/>
       <Deals/>
       <FreeGames/>
        <Experiences/>


       <PopularSlider/>
        </>
            
          
        
    )
}

export default Home;