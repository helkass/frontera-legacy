import React from "react";
import "./form.scss";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import image1 from "../../../assets/images/form-image1.png";
import image2 from "../../../assets/images/form-image2.png";
import image3 from "../../../assets/images/form-image3.png";

function Form(props) {
   return (
      <section>
         <main className="form-main">
            <div className="form--content--left">
               <div style={{ display: "flex", flexDirection: "column" }}>
                  <h2 className="heading-title">Welcome</h2>
                  <p className="left-sub">
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  </p>
               </div>
               <div className="form--left--images">
                  <img src={image1} className="form--image image--1" />
                  <img
                     src={image2}
                     className="form--image image--2 shadow-md"
                  />
                  <img src={image3} className="form--image image--3" />
               </div>
            </div>
            <div className="form--content--right">
               <div className="content--right--main">
                  <h1>Welcome Accident</h1>
                  <p className="form--subtitle">
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  </p>
                  <form className="form">
                     {props.formInput}
                     {props.identity == "register" && (
                        <label
                           htmlFor="policy"
                           className="form--subtitle form-policy">
                           <input type="checkbox" name="policy" id="policy" />i
                           agree for at the Terms, Privacy Policy and Fees
                        </label>
                     )}
                     <button className="button--auth">
                        {props.identity == "register"
                           ? "Create Account"
                           : "Login"}
                     </button>
                  </form>
                  <div className="form--other">
                     <span>------------ or ------------</span>
                     <div
                        style={{
                           display: "flex",
                           justifyContent: "space-evenly",
                           minWidth: "90%",
                           margin: "auto",
                           gap: "9px",
                           flexWrap: "nowrap",
                        }}>
                        <ButtonSocialLogin>
                           <FcGoogle size={22} />
                           Google
                        </ButtonSocialLogin>
                        <ButtonSocialLogin>
                           <FaFacebook size={22} />
                           Facebook
                        </ButtonSocialLogin>
                     </div>
                     {props.identity === "register" && (
                        <span>
                           Already have an account?{" "}
                           <button
                              style={{ color: "blue" }}
                              onClick={() => props.switchForm("login")}>
                              Login
                           </button>
                        </span>
                     )}
                     {props.identity === "login" && (
                        <span>
                           Dont't you have an account?{" "}
                           <button
                              style={{ color: "blue" }}
                              onClick={() => props.switchForm("register")}>
                              Register
                           </button>
                        </span>
                     )}
                  </div>
               </div>
            </div>
         </main>
      </section>
   );
}

const ButtonSocialLogin = ({ children }) => {
   return (
      <button
         style={{
            display: "flex",
            alignItems: "center",
            padding: "9px 12px",
            width: "50%",
            fontWeight: "600",
            justifyContent: "center",
            borderRadius: "5px",
            gap: "10px",
            outline: "0.4px solid rgba(0,0,0,0.2)",
         }}>
         {children}
      </button>
   );
};

export default React.memo(Form);
