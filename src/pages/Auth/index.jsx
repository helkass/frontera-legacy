import React, { Component } from "react";
import Form from "../../components/template/Form";
import "./auth.scss";

class Auth extends Component {
   constructor(props) {
      super(props);

      this.state = {
         identity: "register",
      };
   }

   handleSwitchForm(identity) {
      if (identity == "register") {
         this.setState({ identity: "register" });
      } else {
         this.setState({ identity: "login" });
      }
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevState.identity !== this.state.identity) {
         this.renderFormInput(this.state.identity);
      }
   }

   renderFormInput(data) {
      if (data == "register") {
         return (
            <div className="form--auth--container">
               <div style={{ display: "flex", gap: "10px" }}>
                  <InputForm
                     type="text"
                     label="First Name"
                     name="firstname"
                     required
                  />
                  <InputForm
                     label="last Name"
                     type="text"
                     name="lastname"
                     required
                  />
               </div>
               <div style={{ display: "flex", gap: "10px" }}>
                  <InputForm
                     label="Phone Number"
                     type="text"
                     name="phone"
                     required
                  />
                  <InputForm label="Email" type="email" name="email" required />
               </div>
               <div style={{ display: "flex", gap: "10px" }}>
                  <InputForm
                     label="Password"
                     type="password"
                     name="password"
                     required
                  />
                  <InputForm
                     label="Confirm Password"
                     type="password"
                     name="password"
                     required
                  />
               </div>
            </div>
         );
      } else {
         return (
            <div className="form--auth--container">
               <InputForm name="email" type="email" label="Email" />
               <InputForm name="password" type="password" label="Password" />
               <span
                  style={{
                     color: "blue",
                     fontSize: "0.87rem",
                     textAlign: "end",
                  }}>
                  Forgot password?
               </span>
            </div>
         );
      }
   }
   render() {
      const { identity } = this.state;
      return (
         <Form
            switchForm={(identity) => this.handleSwitchForm(identity)}
            identity={identity}
            formInput={this.renderFormInput(identity)}
         />
      );
   }
}

const InputForm = ({ type, label, name, required }) => {
   return (
      <label
         className="input--form"
         htmlFor={name}
         style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
         {label}
         <input type={type} required={required} name={name} />
      </label>
   );
};

export default Auth;
