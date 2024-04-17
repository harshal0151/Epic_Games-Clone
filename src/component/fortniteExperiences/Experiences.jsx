import React from "react";
import "./Experiences.css"
import deals1 from "../../assets/Experience-img/ex1.avif";





import deals2 from "../../assets/Experience-img/ex2.avif";
import deals3 from "../../assets/Experience-img/ex3.avif";


const Experiences = () => {
  return (
    <>
    <section className="Experiences">
      <span id="title">Fortnite Experiences</span>
      <section className="deals-of-week">
        <div className="card">
          <div className="card-img">
            <img src={deals1} alt="img 1"></img>            
          </div>
          <a href="/">
            <p>Find it in Fortnite</p>
          </a>
          <div className="experience_content">
            <p className="ex-content">A new way to discover what's happening in Fortnite.</p>
            </div>
            <div className="discover">
            <span>Discover</span>
            </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={deals2} alt="img 1"></img>

            
          </div>
          <a href="/">
            <p>Rocket Racing</p>
          </a>
          <div className="experience_content">
            <p className="ex-content">It's lit! Grab the Fuse Starter Quest Pack.</p>
            </div>
            <div className="discover">
            <span>Browse</span>
            </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={deals3} alt="img 1"></img>

            
          </div>
          <a href="/">
            <p>Check out all the deals for this week.</p>
          </a>
          <div className="experience_content">
            <p className="ex-content">Whether you’re a Fortnite Festival performer or on a jam tour in other experiences, Coachella returns for 2024!</p>
            </div>
            <div className="discover">
            <span>Play For Free</span>
            </div>
        </div>
      </section>
      </section>
    </>
  );
};
export default Experiences;
