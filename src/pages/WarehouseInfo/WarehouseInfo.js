import React from "react";
import "./CSS/Warehouseinfo.css";
export default function WarehouseInfo() {
  let imageArray = [0, 1, 2, 3];
  return (
    <div className="warehouse-details-main">
      <div className="warehouse-details-media">
        <div className="warehouse-details-media-multiple">
          {imageArray.map((_) => {
            return <div className="warehouse-details-media-multiple-sub"></div>;
          })}
          <div className="warehouse-details-media-video">
            <div className="play-button">
              <p>{`!>`}</p>
            </div>
          </div>
        </div>
        <div className="warehouse-details-media-main">
          <div className="warehouse-details-media-main-zoom">
            <span>+</span>
          </div>
        </div>
      </div>
      <div className="warehouse-details-content">
        <div className="warehouse-details-content-headers">
          <h3>Product name</h3>
          <h5>Description: lorem ipsum dorem more mansdjj</h5>
        </div>
        <div className="warehouse-details-content-headers">
          <div className="warehouse-details-content-headers"></div>
        </div>
      </div>
    </div>
  );
}
