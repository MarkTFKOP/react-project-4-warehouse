import React, { useState } from "react";
import "../CSS/myinfo.css";
export default function Myinfo() {
  const [isdisabled, setIsDisabled] = useState(true);
  return (
    <div className="myinfo-main">
      {/* <div className="myinfo-title"></div> */}
      <div className="myinfo-body">
        <p>My Profile</p>
        <div
          className="myinfo-body-text"
          style={{ display: "flex", paddingLeft: "1em" }}
        >
          <label>Name</label>
          <input type="text" disabled={isdisabled}></input>
          <label className="label-edit-toggle">
            <p>🖊</p>
          </label>
        </div>
        <div
          className="myinfo-body-text"
          style={{ display: "flex", paddingLeft: "1em" }}
        >
          <label>Mobile</label>
          <input type="text" disabled={isdisabled}></input>
          <label className="label-edit-toggle">
            <p>🖊</p>
          </label>
        </div>
      </div>
    </div>
  );
}
