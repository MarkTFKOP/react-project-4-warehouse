import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "../CSS/userlayout.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import LoginPopup from "../../components/popup/popup-new";

export default function Userlayouts() {
  const [popupEnable, setPopupEnable] = useState(true);
  function toggleLoginPopup(data) {
    console.log("works heres", data);
    setPopupEnable(data);
  }
  return (
    <>
      <Navbar openLogin={toggleLoginPopup} />
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
