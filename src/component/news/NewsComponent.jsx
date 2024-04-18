import news_img1 from "../../assets/NewsComponent/news-img1.avif"
import news_img2 from "../../assets/NewsComponent/news-img2.avif"

import news_img5 from "../../assets/NewsComponent/news-img5.avif"

import "./NewsComponent.css"


const NewsComponent=()=>{
    return(
        <>
    <div id="NewsComponent">
        <h2>Epic Games News</h2>
        <div className="news-cards">
        <div className="news-card">
            <div className="news-img">
                <img src={news_img1} alt=""></img>
            </div>
            <div className="news-content">
            <span>3D AGO</span>
            <h3>The delicious branins behind Back 4 Blood and World War Z's zombies</h3>
            <p>Raising the dead</p>
            <a>Read more</a>
            </div>
        </div>

        <div className="news-card">
            <div className="news-img">
                <img src={news_img2} alt=""></img>
            </div>
            <div className="news-content">
            <span>3D AGO</span>
            <h3>Make Epic Savings on classic games and hidden gems now!</h3>
            <p>Unlock unbeatable gaming discounts during Epic Savings! Level up your gaming experience with incredible discounts. Shop now!</p>
            <a href="jkjk">Read more</a>
            </div>
        </div>


        </div>
        
        <hr className="horizonal-line"></hr>

        <div className="news-lists">
            
            <div className="news-list">
            <div className="news-list-flex">
                <div className="news-list-img">
                    <img src={news_img5} alt=""></img>
                </div>
                <div className="news-list-content">
                <span>3D AGO</span>
                <h3>Inkulinati is a cuter take on the medieval strategy game</h3>
                <p>Ancient doodles come to life</p>
                <a href="jkjk">Read more</a>

                </div>

            </div>                
            </div>
        </div>

    </div>

        </>
    );
};
export default NewsComponent;