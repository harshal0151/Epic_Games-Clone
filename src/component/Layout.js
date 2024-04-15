
import Header from "./header/Header"
import Footer from "../component/Footer/Footer"
import Routers from "../router/Routers";

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
