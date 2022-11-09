import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "../CSS/userlayout.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import LoginPopup from "../../components/popup/popup";

export default function Userlayouts() {
  const [popupEnable, setPopupEnable] = useState(false);
  function openLogin() {
    setPopupEnable(true);
    console.log("popupEnable", popupEnable);
  }
  return (
    <>
      <Navbar openLogin={openLogin} />
      <LoginPopup showPopup={popupEnable} />
      <main>
        <div className="main">
          <div className="main-body">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
