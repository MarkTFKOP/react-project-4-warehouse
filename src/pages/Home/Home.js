import React from "react";
import Carousel from "./components/carousel";
import Featured from "./components/featured";
import "./CSS/Home.css";
import assetObject from "../../assets/assets";

export default function Home() {
  return (
    <div className="Home-body grid-container">
      {/* <div id="detail">Home</div> */}
      <div className="grid-item carousel-container">
        <Carousel image={assetObject.carouselData} />
      </div>
      <div className="grid-item grid-item-border">
        <p className="Home-Headers">Featured Content</p>
      </div>
      <div className="grid-item grid-item-featured">
        <Featured />
      </div>
      <div className="grid-item">
        <p className="Home-Headers">Base</p>
      </div>
    </div>
  );
}
