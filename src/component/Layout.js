import React from "react";
import Header from "./header/Header"
import Home from "../page/Home";
import Footer from "../component/Footer/Footer"


const Layout = () =>{
    return(
        <> 
           <Header/>
          <div className="routes">
          <Home/>
          </div>
           <Footer/>
        </>
    )
}

export default Layout;