import React from "react";
import "../CSS/myhome.css";
export default function myhome() {
  return (
    <div className="myhome-main">
      {/* <div className="myhome-title">My Home</div> */}
      <div className="myhome-title">
        <div className="wrapper">
          <h1 id="title">
            My Homes
            {/* <span class="particletext">slow</span> */}
          </h1>
          {/* <span id="desc">CTA phrase</span> */}
        </div>
      </div>
      <div className="myhome-body">
        <div className="myhome-cards"></div>
        <div className="myhome-cards"></div>
        <div className="myhome-cards"></div>
      </div>
    </div>
  );
}
