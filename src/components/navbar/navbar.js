import React from "react";
import "./navbar.css";
import Logo from "../../assets/web-logo.JPG";
import { useNavigate } from "react-router-dom";

export default function navbar(props) {
  function invokeProps(truthValue) {
    console.log("works");
    props.openLogin(truthValue);
  }
  return <MainNav openLogin={invokeProps} />;
}

function MainNav(props) {
  const navigate = useNavigate();
  function NavigateTo(urlData) {
    return navigate(urlData);
  }
  function openLoginModal(truthValue) {
    console.log("works", props);
    props.openLogin(truthValue);
  }
  return (
    <nav className="navbar">
      <img
        className="navbar-logo "
        alt="Logo"
        src={Logo}
        onClick={() => NavigateTo("/")}
      />
      <ul className="navbar-nav">
        <NavItem icon="😊" text="browse" urlData="warehouselist" />
        <NavItem icon="😊" text="about-us" urlData="about-us" />
        <NavItem icon="😊" text="contact" urlData="contact-us" />
        <button className="login-button" onClick={() => openLoginModal(true)}>
          Login
        </button>
      </ul>
    </nav>
  );
}

function NavItem(props) {
  const navigate = useNavigate();
  function NavigateTo(urlData) {
    return navigate(urlData);
  }
  return (
    <>
      <li className="nav-item" onClick={() => NavigateTo(props.urlData)}>
        <p className="icon-button">
          {/* {props.icon} */}
          <span>{props.text}</span>
        </p>
      </li>
    </>
  );
}
function UserDropdownMenu() {
  return <></>;
}
