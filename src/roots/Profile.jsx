import { useState, useRef } from "react";
import { Link, Routes, Route } from "react-router-dom";

import generalStyles from "/sass/modules/_General.module.scss";
import loginStyles from "/sass/modules/_Login.module.scss";

import Menu from "../components/general/Menu";
import Footer from "../components/general/Footer";
import HeroBanner from "../components/general/HeroBanner";
import SignInForm from "../components/landing/SignInForm";
import UserProfile from "../components/landing/UserProfile";

export default function Login(props) {
  return (
    <div className={loginStyles.Login}>
      <Menu user={props.user} />

      <HeroBanner img="/img/bands_background.png" title="Profile" />

      {props.user === "" ? <SignInForm setUser={props.setUser} /> : <UserProfile user={props.user} />}
      <Footer />
    </div>
  );
}
