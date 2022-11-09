import React from "react";
import "../CSS/featured.css";
export default function featured() {
  return (
    <div className="featured-container">
      <div className="featured-container-item">
        <img
          className="featured-container-item-image "
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3609497/imani-clovis-LxVxPA1LOVM-unsplash.jpg"
          alt="this_is_image"
        ></img>
        <div className="featured-container-item-overlay-details image-overlay-blur">
          <div className="featured-container-item-overlay-title">Example</div>
          <p className="featured-container-item-overlay-desc">
            Here is descriptino
          </p>
        </div>
      </div>
      <div className="featured-container-item">
        <img
          className="featured-container-item-image"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3609497/imani-clovis-LxVxPA1LOVM-unsplash.jpg"
          alt="this_is_image"
        ></img>
        <div className="featured-container-item-overlay-details image-overlay-blur">
          <div className="featured-container-item-overlay-title">Example</div>
          <p className="featured-container-item-overlay-desc">
            Here is descriptino
          </p>
        </div>
      </div>
      <div className="featured-container-item">
        <img
          className="featured-container-item-image"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3609497/imani-clovis-LxVxPA1LOVM-unsplash.jpg"
          alt="this_is_image"
        ></img>
        <div className="featured-container-item-overlay-details image-overlay-blur">
          <div className="featured-container-item-overlay-title">Example</div>
          <p className="featured-container-item-overlay-desc">
            Here is descriptino
          </p>
        </div>
      </div>
    </div>
  );
}
