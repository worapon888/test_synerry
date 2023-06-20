import React from "react";
import "./Services.css";

const Service = () => {
  return (
    <div className="container__services paddings flexColCenter">
      <div className="containerbtn_service">
        <a href="#" className="button btn-service">
          หน่วยงานภายใน
        </a>
        <a href="#" className="button2 btn-service">
          หน่วยงานภายนอก
        </a>
      </div>
      <div className="gradient_services"></div>
      <div className=" flexCenter">
        <div className="imgServieces">
          <img src="./Images/Service_1.png"></img>
          <div className="text_service1 flexColCenter">
            <h3>มาตรฐานให้บริการ</h3>
            <p>กรมโยธาและผังเมือง</p>
          </div>
        </div>

        <div className="imgServieces">
          <img src="./Images/Service_2.png"></img>
          <div className="text_service2 flexColCenter">
            <h3>กฏหมายของกรมโยธาธิการ</h3>
            <p>กับการเข้าสู่ประชาคมอาเซียน</p>
          </div>
        </div>

        <div className="imgServieces">
          <img src="./Images/Service_3.png"></img>
          <div className="text_service3 flexColCenter">
            <h3>
              ระเบียบกรมโยธาธิการ
              <br /> และ ผังเมืองว่าด้วยการ
            </h3>
            <p>ให้บริการวิเคราะห์วิจัยและทดสอบวัสดุ</p>
          </div>
        </div>

        <div className="imgServieces">
          <img src="./Images/Service_4.png"></img>
          <div className="text_service4 flexColCenter">
            <h3>การบริการฐานข้อมูลดิจิตัล</h3>
            <p>ด้านผังเมือง</p>
          </div>
        </div>

        <div className="imgServieces">
          <img src="./Images/Service_5.png"></img>
          <div className="text_service5 flexColCenter">
            <h3>ประกาศรับสมัครงาน</h3>
            <p>กรมโยธาและผังเมือง</p>
          </div>
        </div>

        <div className="imgServieces">
          <img src="./Images/Service_6.png"></img>
          <div className="text_service6 flexColCenter">
            <h3>การจัดการความรู้</h3>
            <p>กรมโยธาและผังเมือง</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
