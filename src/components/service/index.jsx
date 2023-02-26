import React from "react";
import "./service.scss";

// images
import banner from "../../assets/images/service-banner.jpg";

// icons
import { AiOutlineCheck } from "react-icons/ai";
const Service = () => {
   return (
      <section id="service">
         <main className="container service-main flex">
            <div className="service-main-left">
               <img src={banner} alt="service-image" />
            </div>
            <div className="service-main-right">
               <p className="title">complete feature for your apps</p>
               <p className="subtitle">Complete feature for your apps</p>
               <div className="service-main-dropdowns">
                  <div className="service-main-dropdowns-item">
                     <span className="service-main-dropdowns-icon">
                        <AiOutlineCheck size={20} />
                     </span>
                     <span>interactive with customer</span>
                  </div>
                  <div className="service-main-dropdowns-item">
                     <span className="service-main-dropdowns-icon">
                        <AiOutlineCheck size={20} />
                     </span>
                     <span>interactive with customer</span>
                  </div>
                  <div className="service-main-dropdowns-item">
                     <span className="service-main-dropdowns-icon">
                        <AiOutlineCheck size={20} />
                     </span>
                     <span>interactive with customer</span>
                  </div>
                  <div className="service-main-dropdowns-item">
                     <span className="service-main-dropdowns-icon">
                        <AiOutlineCheck size={20} />
                     </span>
                     <span>interactive with customer</span>
                  </div>
                  <div className="service-main-dropdowns-item">
                     <span className="service-main-dropdowns-icon">
                        <AiOutlineCheck size={20} />
                     </span>
                     <span>interactive with customer</span>
                  </div>
               </div>
            </div>
         </main>
      </section>
   );
};

export default Service;
