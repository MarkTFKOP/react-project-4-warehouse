import React from "react";
import "./CSS/Profile.css";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const navigate = useNavigate();
  const goToPage = function (pageName) {
    return navigate(pageName);
  };
  return (
    <div className="profile-main">
      <div className="profile-title"></div>
      <div className="profile-body">
        <div className="profile-side-left">
          <div className="profile-side-left-header">Your details</div>
          <div className="profile-side-left-content">
            <div
              className="profile-side-left-content-1"
              onClick={() => goToPage("mydetails")}
            >
              My Profile
            </div>
            <div
              className="profile-side-left-content-2"
              onClick={() => goToPage("myhome")}
            >
              My Home
            </div>
          </div>
        </div>
        <div className="profile-side-right">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
