import React from "react";
import "./Footer.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { BsFillTelephoneOutboundFill, BsHeadphones } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container__footer flexCenter">
        <div className="section1 paddings">
          <h2>กรมโยธาธิการและผังเมือง กระทรวงมหาดไทย</h2>
          <p>224 ถนนพระราม9 แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10320</p>
          <div className="social__icon">
            <a href="#" className="Icon">
              <FaFacebookSquare className="Icon" />
            </a>
            <a href="#">
              <FaInstagramSquare className="Icon" />
            </a>
            <a href="#">
              <FaTwitterSquare className="Icon" />
            </a>
          </div>
        </div>
        <div className="section2">
          <div className="container_contact">
            <div className="contact">
              <BsFillTelephoneOutboundFill
                size={18}
                color="#fff"
                className="Icon"
              />
              <p>โทรศัพท์</p>
            </div>
            <div className="contact">
              <AiFillPrinter size={18} color="#fff" />
              <p>โทรสาร</p>
            </div>
            <div className="contact">
              <MdEmail size={18} color="#fff" />
              <p>อีเมล</p>
            </div>
            <div className="contact">
              <BsHeadphones size={18} color="#fff" />
              <p>
                หน่วยงาน
                <br />
                บริการ
              </p>
            </div>
          </div>
          <div className="number">
            <span>0 2207 3599</span>
            <span>0 2207 3506</span>
            <a className="linkmail" href="mailto:suport@erc.ar.th">
              support@erc.ar.th
            </a>
            <h3>1204</h3>
          </div>
        </div>
        <div className="section3">
          <a href="#">การปฏิเสธความรับผิดชอบ (Disclaimer)</a>
          <a href="#">นโยบายเว็บไซต์ (Website Policy)</a>
          <a href="#">นโยบายคุ้มครองส่วนบุคคล (Privacy Policy)</a>
          <a href="#">
            นโยบายการรักษาความมั่นคงปลอดภัย (Website Security Policy)
          </a>
        </div>
      </div>
      <div className="countNum flexColCenter ">
        <p>สงวนสิทธิ์ &#169; โดยกรมโยธาธิการและผังเมือง กระทรวงมหาดไทย </p>
        <a href="https://www.freecounterstat.com" title="free stat counter">
          <img
            src="https://counter10.optistats.ovh/private/freecounterstat.php?c=uaw2x729dagxtn6r277bdqhb8tcahrjt"
            border="0"
            title="free stat counter"
            alt="free stat counter"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
