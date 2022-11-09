import React from "react";
import "./navbar.css";
import Logo from "../../assets/web-logo.JPG";
import { useNavigate } from "react-router-dom";

export default function navbar(props) {
  function invokeProps() {
    console.log("works");
    props.openLogin();
  }
  // return <MainNav openLogin={invokeProps()} />;
  return <MainNav />;
}

function MainNav(props) {
  const navigate = useNavigate();
  function NavigateTo(urlData) {
    return navigate(urlData);
  }
  function openLoginModal() {
    console.log("works");
    props.openLogin();
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
        <button className="login-button">Login</button>
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
