import React, { useState, useEffect } from "react";
import "../CSS/carousel.css";
export default function Carousel(props) {
  // State hooks
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [counter, setCounter] = useState(0);
  // useEffect(() => {
  //   console.log("ere");
  //   console.log(props.image[counter].url);
  // }, []);
  return (
    <div>
      <section className={`home-carousel-main`}>
        <img
          className={`home-carousel-main-image`}
          src={props.image[counter].url}
          alt={props.image[counter].title}
        />
      </section>
      <title>{props.image[counter].title}</title>
    </div>
  );
}
