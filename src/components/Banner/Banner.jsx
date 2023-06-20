import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container__banner flexCenter">
      <div className="banner"></div>
      <div className="img_banner"></div>
      <div className="text_banner flexColCenter">
        <h1>เราทำความ ดี ด้วยใจ</h1>
        <p>เพื่อชุมชนและสังคม พัฒนาด้านแหล่งน้ำและปรับปรุงภูมิทัศน์</p>
      </div>
    </div>
  );
};

export default Banner;
