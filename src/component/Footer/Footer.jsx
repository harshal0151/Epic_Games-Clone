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
            <FontAwesomeIcon className="icon" icon={faFacebook} />
            <FontAwesomeIcon className="icon" icon={faTwitter} />
            <FontAwesomeIcon className="icon" icon={faYoutube} />
          </div>
          <div className="social_right">
            <FontAwesomeIcon id="icon" icon={faAngleUp} />
          </div>
        </div>

        <div className="footer_top">
          <span>Resources</span>
          <div className="resources">
            <div className="resources_1">
             
              <ul>
                <li>Support-A-Creator</li>
                <li>Distribute on Epic Games</li>
                <li>Careers</li>
                <li>Company</li>
              </ul>
              
            </div>

            <div className="resources_1">
              <ul>
                <li>Support-A-Creator</li>
                <li>Distribute on Epic Games</li>
                <li>Careers</li>
                <li>Company</li>
              </ul>
            </div>

            <div className="resources_1">
              <ul>
                <li>Support-A-Creator</li>
                <li>Distribute on Epic Games</li>
                <li>Careers</li>
                <li>Company</li>
              </ul>
            </div>
          </div>

          <span>made by</span>
          <div className="resources">
            <div className="resources_1">
              <ul>
                <li>Support-A-Creator</li>
                <li>Distribute on Epic Games</li>
                <li>Careers</li>
                <li>Company</li>
              </ul>
            </div>

            <div className="resources_1">
              <ul>
                <li>Support-A-Creator</li>
                <li>Distribute on Epic Games</li>
                <li>Careers</li>
                <li>Company</li>
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
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Store Refund Policy</li>
            </ol>
          </div>



          <div className="epic_unreal">

          <div className="logo_policy">
          <img src={logo} alt="logo" />
          </div>

          <div className="logo_policy">
          <img src={Unreal} alt="unreal" />
          </div>
          </div>
          
        </div>

      </section>
    </>
  );
};
export default Footer;
