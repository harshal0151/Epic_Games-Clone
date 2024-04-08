import React from "react";
import "../Footer/Footer.css";

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
      </section>
    </>
  );
};
export default Footer;
