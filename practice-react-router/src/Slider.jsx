import React from "react";
import Owlcarosel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import style from "./Slider.css"
import img1 from "./images/1.jpg"
import img2 from "./images/2.jpg"
import img3 from "./images/3.png"
import img4 from "./images/4.jpg"

const Slider = () => {
    return (
        <Owlcarosel
            className="owl-theme"
            items="1"
            autoplay
            nav
            dots
            loop
        >
            <div className="banner-item">
                <img className="banner" src={img1} alt="" />
            </div>
            <div className="banner-item">
                <img className="banner" src={img2} alt="" />
            </div>
            <div className="banner-item">
                <img className="banner" src={img3} alt="" />
            </div>
            <div className="banner-item">
                <img className="banner" src={img4} alt="" />
            </div>
            <div className="banner-item">
                <img className="banner" src={img1} alt="" />
            </div>
            <div className="banner-item">
                <img className="banner" src={img2} alt="" />
            </div>
            <div className="banner-item">
                <img className="banner" src={img3} alt="" />
            </div>
            <div className="banner-item">
                <img className="banner" src={img4} alt="" />
            </div>
        </Owlcarosel>
    )
}

export default Slider