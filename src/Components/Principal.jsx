import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaEllipsisV, FaRegCalendarMinus } from "react-icons/fa";
import PieComponent from "./PieComponent";
import { Progress } from "antd";
import ColaComponent from "./ColaComponent";
import PieComponent2 from "./PieComponent2";

const data = [
  {
    name: "L",
    actual: 50,
    Promedio: 20,
    amt: 2400,
  },
  {
    name: "M",
    actual: 25,
    Promedio: 30,
    amt: 2210,
  },
  {
    name: "MX",
    actual: 10,
    Promedio: 15,
    amt: 2290,
  },
  {
    name: "J",
    actual: 70,
    Promedio: 18,
    amt: 2000,
  },
  {
    name: "V",
    actual: 22,
    Promedio: 55,
    amt: 2181,
  },
  {
    name: "S",
    actual: 83,
    Promedio: 46,
    amt: 2500,
  },
  {
    name: "D",
    actual: 12,
    Promedio: 16,
    amt: 2100,
  },
];

const Principal = () => {
  return (
    <div className="pt-[25px] px-[25px] bg-[#F8F9FC] ">
      <div className=" xl:flex items-center justify-between  ">
        <h1 className="xl: text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer">
          Estudios históricos
        </h1>
        <button className="xl:bg-[#2E59D9] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer">
          Generate Report
        </button>
      </div>
      <div className="xl:grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]">
        <div className="xl:h-[50px] rounde-[8px] bg-white border-l-[4px]  border-r-[4px] border-[#4E73DF] flex items-center  justify-between px-[30px] cursor-pointer hover:shadow-xl transform hover:scale-[103%] transition duration-300 ease-out rounded-[10px]">
          <div>
            <h2 className="xl:text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Ecografía
            </h2>
            <h1 className="xl:text-[15px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              1250
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={20} color="" />
        </div>
        <div className="xl:h-[50px] rounde-[8px] bg-white border-l-[4px]  border-r-[4px] border-[#4E73DF] flex items-center  justify-between px-[30px] cursor-pointer hover:shadow-xl transform hover:scale-[103%] transition duration-300 ease-out rounded-[10px]">
          <div>
            <h2 className="xl:text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Tomgografia Computarizada
            </h2>
            <h1 className="xl:text-[15px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              2000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={20} color="" />
        </div>

        <div className="xl:h-[50px] rounde-[8px] bg-white border-l-[4px]   border-r-[4px] border-[#4E73DF] flex items-center  justify-between px-[30px] cursor-pointer hover:shadow-xl transform hover:scale-[103%] transition duration-300 ease-out rounded-[15px]">
          <div>
            <h2 className="xl:text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Rayos X
            </h2>
            <h1 className="xl:text-[15px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              5656
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={20} color="" />
        </div>
        <div className="xl:h-[50px] rounde-[8px] bg-white border-l-[4px]   border-r-[4px] border-[#4E73DF] flex items-center  justify-between px-[30px] cursor-pointer hover:shadow-xl transform hover:scale-[103%] transition duration-300 ease-out rounded-[15px]">
          <div>
            <h2 className="xl:text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Resonancia Magnetica
            </h2>
            <h1 className="xl:text-[15px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              32088
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={20} color="" />
        </div>
      </div>
      <h1 className="xl: text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer">
        Estudios este mes
      </h1>
      <div className="xl:grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]">
        <div className="xl:h-[50px] rounde-[8px] bg-white border-l-[4px]  border-r-[4px] border-[#4E73DF] flex items-center  justify-between px-[30px] cursor-pointer hover:shadow-xl transform hover:scale-[103%] transition duration-300 ease-out rounded-[10px]">
          <div>
            <h2 className="xl:text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Ecografía
            </h2>
            <h1 className="xl:text-[15px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              1250
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={20} color="" />
        </div>
        <div className="xl:h-[50px] rounde-[8px] bg-white border-l-[4px]  border-r-[4px] border-[#4E73DF] flex items-center  justify-between px-[30px] cursor-pointer hover:shadow-xl transform hover:scale-[103%] transition duration-300 ease-out rounded-[10px]">
          <div>
            <h2 className="xl:text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Tomgografia Computarizada
            </h2>
            <h1 className="xl:text-[15px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              2000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={20} color="" />
        </div>

        <div className="xl:h-[50px] rounde-[8px] bg-white border-l-[4px]   border-r-[4px] border-[#4E73DF] flex items-center  justify-between px-[30px] cursor-pointer hover:shadow-xl transform hover:scale-[103%] transition duration-300 ease-out rounded-[15px]">
          <div>
            <h2 className="xl:text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Rayos X
            </h2>
            <h1 className="xl:text-[15px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              15
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={20} color="" />
        </div>
        <div className="xl:h-[50px] rounde-[8px] bg-white border-l-[4px]   border-r-[4px] border-[#4E73DF] flex items-center  justify-between px-[30px] cursor-pointer hover:shadow-xl transform hover:scale-[103%] transition duration-300 ease-out rounded-[15px]">
          <div>
            <h2 className="xl:text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Resonancia magnetica
            </h2>
            <h1 className="xl:text-[15px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              22
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={20} color="" />
        </div>
      </div>

      <div className="xl:flex mt-[22px] w-full gap-[30px] justify-between">
        <div className="xl:basis-[50%] border bg-white shadow-xl cursor-pointer rounded-[4px]">
          <div className=" xl:bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px] ">
            <h2 className="xl:text-[#4e73df] text-[16px] leading-[19px] font-bold">
              Densidad Semanal De Estudios
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="xl:flex">
            <LineChart
              width={600}
              height={400}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="bump"
                dataKey="Promedio"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="actual" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
        <div className="xl:basis-[50%] border bg-white shadow-xl cursor-pointer rounded-[4px]  ">
          <div className="xl:bg-[#F8F9FC] flex items-center justify-between py-[10px] px-[20px] border-b-[1px] border-[#EDEDED] ">
            <h2 className="xl:text-[#4e73df] text-[16px] leading-[19px] font-bold">
              Almacenamiento
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="xl:pl-[25px] py-[5px] flex items-center justify-center">
            <PieComponent2 />
          </div>
        </div>
      </div>

      <div>
        <div className="xl:flex mt-[22px] w-full gap-[3px] justify-between">
          <div className="xl:basis-[50%] border bg-white shadow-xl cursor-pointer rounded-[4px]">
            <div className="xl:bg-[#F8F9FC] flex flex-item-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDE]">
              <h2 className="xl:text-[#4e73df] text-[16px] leading-[19px] font-bold">
                Progeso Almacenamiento
              </h2>
              <FaEllipsisV color="gray" className="cursor-pointer" />
            </div>
            <div className="xl:px-[25px] space-y-[15px] py-[15px]">
              <h2>Almacenamiento Restante esta semana</h2>
              <Progress percent={30} strokeColor="#E74A3B" />
            </div>
            <div className="xl:px-[25px] space-y-[15px] py-[15px]">
              <h2>Almacenamiento Restante este Mes</h2>
              <Progress percent={30} status="active" strokeColor="#F6C23E" />
            </div>
            <div className="xl:px-[25px] space-y-[15px] py-[15px]">
              <h2>Almacenamiento Restante Servidor</h2>
              <Progress percent={100} status="active" strokeColor="#4E73DF" />
            </div>
            <div className="xl:px-[25px] space-y-[15px] py-[15px]">
              <h2>Poner axlo mas</h2>
              <Progress percent={50} status="exception" strokeColor="#1CC88A" />
            </div>
          </div>
          <div className="xl:basis-[50%] border">
            <div className="xl:bg-[#F8F9FC] flex flex-item-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDE] shadow-xl">
              <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
                Cola De Estudios
              </h2>
              <FaEllipsisV color="gray" className="cursor-pointer" />
            </div>
            <div className="xl:bg-[#F8F9FC] flex flex-item-center  py-[15px] px-[20px] border-b-[1px] border-[#EDEDE]">
              <ColaComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
