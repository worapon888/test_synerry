import React from "react";
import "./Navbar.css";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import { AiOutlineAlignRight } from "react-icons/ai";
import { menuItems } from "../../menuItem";
import MenuItems from "../../MenuItems";

const navbar = () => {
  return (
    <div className="container_nav1">
      <div className="container_top">
        <p>
          บัญชีของ <a href="#"> คุณจักรพงษ์</a> | ออกจากระบบ
        </p>
      </div>

      <div className="container_nav flexCenter">
        <div className="logo flexCenter">
          <img src="Images/logo.png" alt="logo" />
          <div>
            <p className="text__nav">กรมโยธาธิการและผังเมือง</p>
            <p className="text__eng">
              Department of public works
              <br /> and town & country planning
            </p>
          </div>
        </div>

        <div className="flexCenter">
          <nav className="nav__button  paddings">
            <ul className="menus">
              {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return (
                  <MenuItems items={menu} key={index} depthLevel={depthLevel} />
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="align__con flexCenter ">
          <AiOutlineAlignRight className="align" />
        </div>
        <div className="flexCenter paddings">
          <img src="/Images/thai.webp" alt="thai" className="img__thai" />
          <BsChevronDown className="search" />
          <div className="flexCenter ">
            <BsSearch className="align_search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
