import React, { useState } from "react";
import "../header/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faGlobe,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/epicLogo.png";
import valorant from "../../assets/valorant.svg";

const Header = () => {
  const [playDropdownVisible, setPlayDropdownVisible] = useState(false);
  const [distributeDropdownVisible, setDistributeDropdownVisible] =
    useState(false);

  const handlePlayMouseEnter = () => {
    setPlayDropdownVisible(true);
  };

  const handlePlayMouseLeave = () => {
    setPlayDropdownVisible(false);
  };

  const handleDistributeMouseEnter = () => {
    setDistributeDropdownVisible(true);
  };

  const handleDistributeMouseLeave = () => {
    setDistributeDropdownVisible(false);
  };
  return (
    <>
      <div className="nav">
        <div className="navleft">
          <div className="navlogo">
            <img src={logo} alt="logo" />

            <a href="" onMouseEnter={handlePlayMouseEnter}>
              <FontAwesomeIcon className="icon" icon={faAngleDown} />
            </a>
            {playDropdownVisible && (
              <div
                className="dropdown-content"
                onMouseLeave={handlePlayMouseLeave}
              >
                <div className="optionLeft">
                  <div className="play">
                    <h2>Play</h2>
                    <ul>
                      <li>
                        <div className="playcontainer">
                          <img src={valorant} alt="" />
                          <p>Valorant</p>
                        </div>
                      </li>
                      <li>
                        <div className="playcontainer">
                          <img src={valorant} alt="" />
                          <p>Valorant</p>
                        </div>
                      </li>
                      <li>
                        <div className="playcontainer">
                          <img src={valorant} alt="" />
                          <p>Valorant</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="play">
                    <h2>Discover</h2>
                    <ul>
                      <li>
                        <div className="playcontainer">
                          <img src={valorant} alt="" />
                          <p>Valorant</p>
                        </div>
                      </li>
                      <li>
                        <div className="playcontainer">
                          <img src={valorant} alt="" />
                          <p>Valorant</p>
                        </div>
                      </li>
                      <li>
                        <div className="playcontainer">
                          <img src={valorant} alt="" />
                          <p>Valorant</p>
                        </div>
                      </li>
                      <li>
                        <div className="playcontainer">
                          <img src={valorant} alt="" />
                          <p>Valorant</p>
                        </div>
                      </li>
                      <li>
                        <div className="playcontainer">
                          <img src={valorant} alt="" />
                          <p>Valorant</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="optionLeft">
                  <div className="play">
                    <h2>Create</h2>
                    <ul>
                      <li>
                        <div className="playcontainer">
                          <img src={valorant} alt="" />
                          <p>Valorant</p>
                        </div>
                      </li>
                      <li>
                        <div className="playcontainer">
                          <img src={valorant} alt="" />
                          <p>Valorant</p>
                        </div>
                      </li>
                      <li>
                        <div className="playcontainer">
                          <img src={valorant} alt="" />
                          <p>Valorant</p>
                        </div>
                      </li>
                      <li>
                        <div className="playcontainer">
                          <img src={valorant} alt="" />
                          <p>Valorant</p>
                        </div>
                      </li>
                      <li>
                        <div className="playcontainer">
                          <img src={valorant} alt="" />
                          <p>Valorant</p>
                        </div>
                      </li>
                      <li>
                        <div className="playcontainer">
                          <img src={valorant} alt="" />
                          <p>Valorant</p>
                        </div>
                      </li>
                      <li>
                        <div className="playcontainer">
                          <img src={valorant} alt="" />
                          <p>Valorant</p>
                        </div>
                      </li>
                      <li>
                        <div className="playcontainer">
                          <img src={valorant} alt="" />
                          <p>Valorant</p>
                        </div>
                      </li>
                      <li>
                        <div className="playcontainer">
                          <img src={valorant} alt="" />
                          <p>Valorant</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <hr className="icon" />
          <div className="navLinks">
            <h2>STORE</h2>
            <a href="#">Support</a>
            <a href="#" onMouseEnter={handleDistributeMouseEnter}>
              Distribute
            </a>
            {distributeDropdownVisible && (
              <div
                className="Distribute-content "
                onMouseLeave={handleDistributeMouseLeave}
              >
                <ul>
                  <li>
                    <p>Distribute on Epic Game Store</p>
                  </li>
                  <li>
                    <p>Developer Forums</p>
                  </li>
                  <li>
                    <p>Documentation</p>
                  </li>
                  <li>
                    <p>Learning</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="navright">
          <a href="">
            <FontAwesomeIcon className="icon" icon={faGlobe} />
          </a>
          <a href="">
            <FontAwesomeIcon className="icon1 " icon={faUser} />
          </a>
          <button>Download</button>
        </div>
      </div>

      <div className="nav1">
        <div className="nav1Links">
          <input type="text" placeholder="search store" />
          <a id="dis" href="">
            Discover
          </a>
          <a href="">Browse</a>
          <a href="">News</a>
        </div>
      </div>
    </>
  );
};

export default Header;
