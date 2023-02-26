import React from "react";
import "./modal.scss";

const Modal = ({ children, modalRef }) => {
   const mouseOut = () => {
      modalRef.current.style["transform"] = "translateY(-450%)";
   };

   const mouseOver = () => {
      modalRef.current.style["transform"] = "translateY(0)";
   };
   return (
      <div
         id="modal"
         onMouseOver={mouseOver}
         onMouseOut={mouseOut}
         ref={modalRef}
         className="modal">
         {children}
      </div>
   );
};

export default Modal;
