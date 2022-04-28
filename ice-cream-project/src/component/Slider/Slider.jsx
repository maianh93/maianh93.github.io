
import React from "react";
import Carousel from "react-material-ui-carousel";

import BasicPagination from "../Pagination/Pagination";
import styles from "./Slider.module.css"


const pictures = [
    {image: '/image/banner/hd-11.jpg', title: 'A Nice Car'},
    {image: '/image/banner/hd-12.jpg', title: 'Delicious Coffee'},
    {image: '/image/banner/hd-13.jpg', title: 'Beautiful Dog'},
];


const Slider = () => {
  const [index, setIndex] = React.useState(0);

  const handleChange = (cur, prev) => {
    setIndex(cur);
  };

  return (
    <div>
      <Carousel
        index={index}
        onChange={handleChange}
        interval={4000}
        animation="slide"
        indicators={false}
        stopAutoPlayOnHover
        swipe
        className={styles.my_carousel}
      >
        {pictures.map((item, i) => (
          <div style={{ width: "100%", height: "100%" }}><img src={item.image} />{item.title}</div>
        ))}
      </Carousel>
      {pictures.map((item, i) => (
        <BasicPagination 
        onClick={() => setIndex(i)}
        length={pictures.length}
        handleChange={handleChange}
        />
      ))}

      {pictures.map((item, i) => (
        <button
          onClick={() => setIndex(i)}
          style={{ background: i === index ? "#ccc" : "#fff" }}
        >
          {i}
        </button>
      ))}
    </div>
  );
}

export default Slider