import React from "react";
import "./features.scss";

// image
import uiux from "../../assets/images/uiux.jpg";

// icons
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const Features = () => {
   return (
      <section id="features">
         <main className="container features">
            <h1 className="title">#built your bussiness with apps</h1>
            <p className="subtitle">
               -Bangun sebuah website untuk menarik banyak pelanggan-
            </p>
            <div className="features-cards">
               <CardContent />
               <CardContent />
               <CardContent />
            </div>
         </main>
      </section>
   );
};

const CardContent = React.memo(function CardContent() {
   return (
      <div className="card features-card">
         <img src={uiux} alt="card-images" />
         <p className="card-title">Built e-commerce with MERN</p>
         <p className="card-subtitle">complete features with commerce-js</p>
         <div className="flex features-card-icons">
            <span className="card-icon">
               <FaReact size={22} color="blue" />
            </span>
            <span className="card-icon">
               <SiMongodb size={22} color="green" />
            </span>
            <span className="card-icon">
               <SiExpress size={22} color="green" />
            </span>
            <span className="card-icon">
               <FaNodeJs size={22} color="green" />
            </span>
         </div>
      </div>
   );
});

export default Features;
