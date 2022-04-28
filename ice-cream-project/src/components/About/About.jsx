import React from "react";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 30,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const image1 =
  "/image/home/about.jpg";
const image2 =
  "/image/banner/hd-11.jpg";
const image3 =
  "/image/banner/hd-12.jpg";
const image4 =
  "/image/banner/hd-13.jpg"

const About = () => (
<div style={styles}>
    <Parallax bgImage={image1} strength={100}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
            <p>Về chúng tôi</p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus beatae ipsa exercitationem eligendi id et, non soluta ullam quod ex aspernatur veritatis, corrupti quisquam officiis eaque fugit. Corrupti, rerum saepe.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, impedit soluta sed nesciunt libero, ipsum vel, voluptatem facere corporis consequatur molestias consequuntur dignissimos quam. Eius eum beatae sequi minus pariatur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestiae aliquam asperiores explicabo, vel eius incidunt corrupti totam. Perferendis nemo quam autem inventore excepturi ab quos, provident a. Ullam, nulla?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti cupiditate consequuntur debitis? Eos maxime modi porro quisquam pariatur corporis asperiores. Harum quisquam molestias, veritatis ipsa totam neque voluptas fugiat!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti magnam iure dolor doloribus fugiat expedita necessitatibus asperiores. Doloremque provident aspernatur rem, cumque delectus deleniti libero itaque laboriosam, quos, reiciendis tenetur!</div>
      </div>
    </Parallax>
  </div>
);

export default About
