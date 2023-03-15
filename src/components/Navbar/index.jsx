import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

import { HiBars3BottomLeft } from "react-icons/hi2";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Modal from "../template/Modal";
const NavbarComponent = () => {
   const [showNavbar, setShowNavbar] = React.useState(false);
   const navbarRef = React.useRef();
   const modalRef = React.useRef();

   const [modalValue, setModalValue] = React.useState("");

   const bussinessRef = React.useRef();
   const priceRef = React.useRef();
   const serviceRef = React.useRef();
   const otherRef = React.useRef();

   const handleModal = (event) => {
      // take specific id
      let id = event.target.innerText;
      setModalValue(id);
      modalRef.current.style["transform"] = "translateY(0)";
   };

   const hadleModalOut = () => {
      if (modalRef.current.onmouseover) {
         return null;
      } else {
         modalRef.current.style["transform"] = "translateY(-450%)";
      }
   };

   React.useEffect(() => {
      // handle navbar reponsive
      showNavbar
         ? navbarRef.current.classList.add("show")
         : navbarRef.current.classList.remove("show");
   }, [showNavbar]);

   const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
   };

   return (
      <nav className="shadow-sm">
         <main className="container flex nav">
            <Link to="/">
               <div className="logo">
                  front<span>era</span>
               </div>
            </Link>
            <div ref={navbarRef} className="nav-links">
               <Link to="/">
                  <span
                     onMouseOut={hadleModalOut}
                     ref={bussinessRef}
                     onMouseOver={(e) => handleModal(e)}
                     id="bussiness">
                     bussiness
                  </span>
               </Link>
               <Link to="/">
                  <span
                     onMouseOut={hadleModalOut}
                     ref={priceRef}
                     onMouseOver={(e) => handleModal(e)}>
                     prices
                  </span>
               </Link>
               <Link to="/">
                  <span
                     onMouseOut={hadleModalOut}
                     ref={serviceRef}
                     onMouseOver={(e) => handleModal(e)}>
                     services
                  </span>
               </Link>
               <Link to="/">
                  <span
                     onMouseOut={hadleModalOut}
                     ref={otherRef}
                     onMouseOver={(e) => handleModal(e)}>
                     others
                  </span>
               </Link>
               <Link to="/auth">
                  <button className="btn-register-mobile">Register</button>
               </Link>
               <button
                  className="btn-bars"
                  onClick={() => setShowNavbar(false)}>
                  <AiOutlineArrowLeft />
               </button>
               {/* modal content not responsive value */}
               <Modal modalRef={modalRef}>
                  <p>modal {modalValue}</p>
               </Modal>
            </div>
            <Link to="/auth">
               <button className="btn-register">Register</button>
            </Link>
            <button className="btn-bars" onClick={handleShowNavbar}>
               <HiBars3BottomLeft />
            </button>
         </main>
      </nav>
   );
};

export default NavbarComponent;
