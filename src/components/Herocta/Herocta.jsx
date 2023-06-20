import React from "react";
import "./Herocta.css";

const Herocta = () => {
  return (
    <div className="container flexCenter innerWidth">
      <div className="Cta1 flexColStart">
        <div className="text-heroCta">
          <h3>๑.</h3>
          <p>บริการประชาชน</p>
        </div>
      </div>

      <div className="Cta2 flexColStart">
        <div className="text-heroCta2">
          <h3>๒.</h3>
          <p>ข่าวประชาสัมพันธ์</p>
        </div>
      </div>

      <div className="Cta3 flexColStart">
        <div className="text-heroCta3">
          <h3>๓.</h3>
          <p>กฏหมายแบบฟอร์ม</p>
        </div>
      </div>

      <div className="Cta4 flexColStart">
        <div className="text-heroCta4">
          <h3>๔.</h3>
          <p>เผยแพร่ความรู้</p>
        </div>
      </div>

      <div className="Cta5 flexColStart">
        <div className="text-heroCta5">
          <h3>๕.</h3>
          <p>ติดต่อสอบถาม</p>
        </div>
      </div>

      <div className="Cta6 flexColStart">
        <div className="text-heroCta6">
          <h3>๖.</h3>
          <p>แผนงาน/รายงานผล</p>
        </div>
      </div>
    </div>
  );
};

export default Herocta;
