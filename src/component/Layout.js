import React from "react";
import Header from "./header/Header"

import Footer from "../component/Footer/Footer"
import Routers from "../router/Routers";
import Deals from "./deals-of-week/Deals";


const Layout = () =>{
    return(
        <> 
           <Header/>
          <div className="routes">
            <Routers/>
            
          </div>

          
           <Footer/>
        </>
    )
}

export default Layout;
