import React from "react";
import "../Footer/Footer.css";
import logo from "../../assets/epicLogo.png";
import Unreal from "../../assets/Unreal Engine.svg"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <>
      <section className="footer_div">
        <div className="socials">
          <div className="social_left">
            <a href=""><FontAwesomeIcon className="icon" icon={faFacebook} /></a>
            <FontAwesomeIcon className="icon" icon={faTwitter} />
            <FontAwesomeIcon className="icon" icon={faYoutube} />
          </div>
          <div className="social_right">
            <FontAwesomeIcon id="icon" icon={faAngleUp} />
          </div>
        </div>

        <div className="footer_top">
          <span className="temp">Resources</span>
          <div className="resources">
            <div className="resources_1">
             
              <ul>
                <a href=""><li>Support-A-Creator</li></a>
                <a href=""><li>Distribute on Epic Games</li></a>
                <a href=""><li>Careers</li></a>
                <a href=""><li>Company</li></a>
              </ul>
              
            </div>

            <div className="resources_1">
              <ul>
                <a href=""><li>Fan Art Policy</li></a>
                <a href=""><li>UX Research</li></a>
                <a href=""><li>Store EULA</li></a>
                
              </ul>
            </div>

            <div className="resources_1">
              <ul>
              <a href=""><li>Online Services</li></a>
                <a href=""><li>Community Rules</li></a>
                <a href=""><li>Epic Newsroom</li></a>
                
              </ul>
            </div>
          </div>

          <span>Made By Epic Games</span>
          <div className="resources">
            <div className="resources_1">
              <ul>
              <a href=""><li>Battle Breakers</li></a>
                <a href=""><li>Fortnite</li></a>
                <a href=""><li>Infinity Blade</li></a>
                
              </ul>
            </div>

            <div className="resources_1">
              <ul>
              <a href=""><li>Robo Recall</li></a>
                <a href=""><li>Shadow Complex</li></a>
                <a href=""><li>Unreal Tournament</li></a>
                
              </ul>
            </div>
          </div>
        </div>

        <hr/>

        <div className="paraDiv">
          <div className="para">© 2024, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners.</div>
          <div className="para">Our websites may contain links to other sites and resources provided by third parties. These links are provided for your convenience only. Epic Games has no control over the contents of those sites or resources, and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</div>
        </div>

        <div className="policy_section">
          <div className="policy">
            <ol>
              <a href=""><li>Terms of Service</li></a>
              <a href=""><li>Privacy Policy</li></a>
              <a href=""><li>Store Refund Policy</li></a>
            </ol>
          </div>



          <div className="epic_unreal">

          <div className="logo_policy">
          <a href=""><img src={logo} alt="logo" /></a>
          </div>

          <div className="logo_policy">
          <a href=""><img src={Unreal} alt="unreal" /></a>
          </div>
          </div>
          
        </div>

      </section>
    </>
  );
};
export default Footer;
