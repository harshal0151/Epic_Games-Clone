import React, { useState } from "react";
import "../header/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faGlobe,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/epicLogo.png";
import { playData, DiscoverData, CreaterData } from "../constants";

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

            <a href="/" onMouseEnter={handlePlayMouseEnter}>
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
                    {playData.map((p) => (
                      <div className="playcontainer">
                        <img src={p.icon} alt="" />
                        <p>{p.title}</p>
                      </div>
                    ))}
                  </div>

                  <div className="play">
                    <h2>Discover</h2>
                    {DiscoverData.map((d) => (
                      <div className="playcontainer">
                        <img src={d.icon} alt="" />
                        <p>{d.title}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="optionLeft">
                  <div className="play">
                    <h2>Create</h2>
                    {CreaterData.map((c) => (
                      <div className="playcontainer">
                        <img src={c.icon} alt="" />
                        <p>{c.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <hr className="hricon" />
          <h2>STORE</h2>
          <div className="navLinks">
            <a href="/">Support</a>
            <a href="/" onMouseEnter={handleDistributeMouseEnter}>
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
          <a href="/">
            <FontAwesomeIcon className="icon" icon={faGlobe} />
          </a>
          <a href="/">
            <FontAwesomeIcon className="icon1 " icon={faUser} />
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </a>
          <button>Download</button>
        </div>
        <a href="/" id="togglebtn">
          <FontAwesomeIcon className="icon" icon={faBars} />
        </a>
      </div>

      <div className="nav1">
        <div className="nav1Links">
          <input type="text" placeholder="search store" />
          <a href="/" id="dis">
            Discover
          </a>
          <a href="/brows">Browse</a>
          <a href="/news">News</a>
        </div>
      </div>
    </>
  );
};

export default Header;
