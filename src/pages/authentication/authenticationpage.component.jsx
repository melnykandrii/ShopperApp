import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./authenticationpage.styles.scss";

export const AuthenticationPage = () => (
  <div className="authentication">
    <SignIn />
    <SignUp />
  </div>
);
