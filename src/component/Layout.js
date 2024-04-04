import React from "react";
import Header from "./header/Header"
import Home from "../page/Home";

const Layout = () =>{
    return(
        <> 
           <Header/>
          <div className="routes">
          <Home/>
          </div>
           
        </>
    )
}

export default Layout;