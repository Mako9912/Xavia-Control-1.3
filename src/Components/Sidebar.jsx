import React from "react";
import {
  FaTachometerAlt,
  FaRegSun,
  FaChevronRight,
  FaWrench,
  FaStickyNote,
  FaRegChartBar,
  FaRegCalendar,
  FaChevronCircleRight,
  FaChevronLeft,
  FaBolt,
} from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="bg-[#4E73DF] h-screen px-[25px]">
      <div className="px-[10px] py-[10px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
        <h1 className="text-white text-[15px] leading-[10px] font-extrabold cursor-pointer">
          Admin panel
        </h1>
      </div>
      <div className="flex items-center gap-[15px] py-[10px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <FaTachometerAlt color="white" />
        <p className="text-[10px] text-white  leading-[15px] font-extrabold cursor-pointer">
          Dashboard
        </p>
        {/* Interface */}
      </div>
      <div className="pt-[5px] border-b-[1px] border-[#EDEDED]/[0.3] pb-[5px]">
        <p className="text-[10px] text-white/[0.4]  leading-[16px] font-extrabold cursor-pointer">
          INTERFACE
        </p>
        <div className="flex items-center justify-between gap-[10px] py-[5px] cursor-pointer">
          <div className="flex items-center justify-between gap-[10px] ">
            <FaRegSun color="white" />
            <p className="text-[14px] text-white  leading-[15px] font-normal cursor-pointer">
              Components
            </p>
          </div>
          <FaChevronRight color="white" />
        </div>
        <div className="flex items-center justify-between gap-[10px] py-[5px] cursor-pointer">
          <div className="flex items-center justify-between gap-[10px] ">
            <FaWrench color="white" />
            <p className="text-[14px] text-white  leading-[15px] font-normal cursor-pointer">
              Utilities
            </p>
          </div>
          <FaChevronRight color="white" />
        </div>
      </div>
      <div className="pt-[5px] border-b-[1px] border-[#EDEDED]/[0.3]">
        {/* Addons */}
        <p className="text-[10px] text-white/[0.4]  leading-[16px] font-extrabold cursor-pointer">
          Addons
        </p>
        <div className="flex items-center justify-between gap-[10px] py-[5px] cursor-pointer">
          <div className="flex items-center justify-between gap-[10px] ">
            <FaStickyNote color="white" />
            <p className="text-[14px] text-white  leading-[15px] font-normal cursor-pointer">
              Pages
            </p>
          </div>
          <FaChevronRight color="white" />
        </div>
        <div className="flex items-center justify-between gap-[10px] py-[5px] cursor-pointer">
          <div className="flex items-center justify-between gap-[10px] ">
            <FaRegChartBar color="white" />
            <p className="text-[14px] text-white  leading-[15px] font-normal cursor-pointer">
              Charts
            </p>
          </div>
          <FaChevronRight color="white" />
        </div>
        <div className="flex items-center justify-between gap-[10px]  cursor-pointer">
          <div className="flex items-center justify-between gap-[10px] py-[5px] ">
            <FaRegCalendar color="white" />
            <p className="text-[14px] text-white  leading-[15px] font-normal cursor-pointer">
              Tables
            </p>
          </div>
          <FaChevronRight color="white" />
        </div>
      </div>

      
        <div className="flex items-center justify-center pt-[10px]">
            <div className="h-[20px] w-[20px] bg-[#3C5EC1] rounded-full flex items-center justify-center cursor-pointer" >
            <FaChevronLeft color="white"/>
            </div>
        </div>
        <div className="bg-[#395CBF] mt-[15px] flex items-center justify-center flex-col  py-[10px] px-[10px] gap-[15px] rounded-[3px] ">
       <FaBolt color="white"/>
       <p className=" text-[15px] leading-[18px] font-normal text-white/[0.4]">Actualice esta talla para pro </p>
       <button className="bg-green-600 text-white flex items-center justify-center h-[30px] w-full  rounded-[3px] text-[14px] leading-[21px] font-normal" > Upgrade to Pro</button>
        </div>
      

    </div>
  );
};

export default Sidebar;
