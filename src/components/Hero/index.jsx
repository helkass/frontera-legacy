import React from "react";
import "./hero.scss";

import hero_image from "../../assets/images/hand-holding.jpg";
import creditCard from "../../assets/images/credit-card.jpg";
import uiux from "../../assets/images/uiux.jpg";
import bussiness from "../../assets/images/bussiness.jpg";

const Hero = () => {
   return (
      <section id="hero-section">
         <div className="hero-content hero-content-left">
            <h1>
               your best managing platform <span>bussiness</span>
            </h1>
            <button>get free consulte</button>
         </div>
         <RightImageContent />
      </section>
   );
};

const RightImageContent = React.memo(function RightContentImage() {
   return (
      <div className="hero-content hero-content-right">
         <div className="social">
            <img
               className="social-icon social-icon-1 shadow-md"
               src={uiux}
               alt=".."
            />
            <img
               className="social-icon social-icon-2 shadow-md"
               src={bussiness}
               alt=".."
            />
            <img
               className="social-icon social-icon-3 shadow-md"
               src={creditCard}
               alt=".."
            />
         </div>
         <img
            className="hero-content-banner"
            src={hero_image}
            alt="hero-image"
         />
      </div>
   );
});

export default Hero;
