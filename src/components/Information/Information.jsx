import React from "react";
import "./Information.css";

const Information = () => {
  return (
    <div className="information_container ">
      <div className="text_infromation flexColCenter paddings ">
        <div className="text-information flexCenter ">
          <h1 className="flexCenter">ข้</h1>
          <h2>อมูลข่าวสารประชาสัมพันธ์</h2>
        </div>
        <p>
          กรมโยธาธิการและผังเมืองพร้อมให้ข้อมูลข่าวสารที่เป็นประโยชน์ สำหรับคุณ
        </p>
      </div>
      <div className="ิีbtn_information flexCenter">
        <button className="btn_i button">ข่าวกิจกรรม</button>
        <button className="btn_i button"> ข่าวประชาสัมพันธ์์</button>
        <button className="btn_i button">ข่าวตัดจากหนังสือพิมพ์</button>
        <button className="btn_i button">ข่าวกรม</button>
        <button className="btn_i button">วารสารกรมฯ</button>
        <button className="btn_i button">คลังข่าวมหาดไทย</button>
      </div>
    </div>
  );
};

export default Information;
