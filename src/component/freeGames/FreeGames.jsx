import { faGift} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FreeGames.css"
import freeImg1 from "../../assets/freeGames/free1.webp"
import freeImg2 from "../../assets/freeGames/free2.webp"
import freeImg3 from "../../assets/freeGames/free3.avif"



const FreeGames =()=>{
    return(
        <>
            <div className="free_games_div">
                <div className="free_game_icons_flex">
                    <div className="icon_free">
                    <div className="icon">
                    <FontAwesomeIcon id="icon" icon={faGift}/>
                    </div>
                    <span>Free Games</span>
                    </div>
                    <div className="view_btn"><a href="/freeGames"><span > VIEW MORE</span></a></div>
                </div>

                <div className="Free_cards">
                    <div className="card">
                        <div className="card_img">
                            <img src={freeImg1} alt="img"></img>
                            <div className="content"><p>FREE NOW</p></div>
                        </div>
                        <span>Ghostrunner</span>
                        <p>Free Now - Apr 18 at 08:30 PM</p>
                    </div>
                    <div className="card">
                        <div className="card_img">
                            <img src={freeImg2} alt="img"></img>
                            <div className="content black"><p>COMING SOON</p></div>
                        </div>
                        <span>The Big Con</span>
                        <p>Free Apr 18 - Apr 25</p>
                    </div>
                    <div className="card">
                        <div className="card_img">
                           <div className="hover_img"><img src={freeImg3} alt="img"></img></div>
                            <div className="content black"><p>COMING SOON</p></div>
                        </div>
                        
                        <span>Town of Salem 2</span>
                        <p>Free Apr 18 - Apr 25</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FreeGames;