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

const data = [
  {
    name: "Page A",
    uv: 50,
    pv: 20,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 25,
    pv: 30,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 10,
    pv: 15,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 70,
    pv: 18,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 22,
    pv: 55,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 83,
    pv: 46,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 12,
    pv: 16,
    amt: 2100,
  },
];

const Principal = () => {
  return (
    <div className="pt-[25px] px-[25px] bg-[#F8F9FC]">
      <div className=" flex items-center justify-between">
        <h1 className="text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer">
          Dashboard
        </h1>
        <button className="bg-[#2E59D9] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer">
          Generate Report
        </button>
      </div>
      <div className="grid grid-cols-7 gap-[30px] mt-[25px] pb-[15px]">
        <div className="h-[50px] rounde-[8px] bg-white border-l-[4px]  border-r-[4px] border-[#4E73DF] flex items-center  justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out rounded-[10px]">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Earning (Monthly)
            </h2>
            <h1 className="text-[15px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              #40,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={20} color="" />
        </div>
        <div className="h-[50px] rounde-[8px] bg-white border-l-[4px]  border-r-[4px] border-[#4E73DF] flex items-center  justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out rounded-[10px]">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Earning (Monthly)
            </h2>
            <h1 className="text-[15px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              #40,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={20} color="" />
        </div>
        <div className="h-[50px] rounde-[8px] bg-white border-l-[4px]  border-r-[4px]  border-[#4ef95d] flex items-center  justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out rounded-[15px]">
          <div>
            <h2 className="text-[#1cc88a] text-[11px] leading-[17px] font-bold">
              PEDING REQUEST
            </h2>
            <h1 className="text-[15px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              #240,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={20} color="" />
        </div>
        <div className="h-[50px] rounde-[8px] bg-white border-l-[4px]  border-r-[4px] border-[#4E73DF] flex items-center  justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out rounded-[15px]">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Earning (Anual)
            </h2>
            <h1 className="text-[15px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              #40,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={20} color="" />
        </div>
        <div className="h-[50px] rounde-[8px] bg-white border-l-[4px]   border-r-[4px] border-[#4E73DF] flex items-center  justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out rounded-[15px]">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Earning (Monthly)
            </h2>
            <h1 className="text-[15px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              #40,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={20} color="" />
        </div>
        <div className="h-[50px] rounde-[8px] bg-white border-l-[4px]   border-r-[4px] border-[#4E73DF] flex items-center  justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out rounded-[15px]">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Earning (Monthly)
            </h2>
            <h1 className="text-[15px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              #40,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={20} color="" />
        </div>
        <div className="h-[50px] rounde-[8px] bg-white border-l-[4px]   border-r-[4px] border-[#4E73DF] flex items-center  justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out rounded-[15px]">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Earning (Monthly)
            </h2>
            <h1 className="text-[15px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              #40,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={20} color="" />
        </div>
      </div>
      <div className="flex mt-[22px] w-full gap-[30px]">
        <div className="basis-[10%] border bg-white shadow-md cursor-pointer roundes-[4px] ">
          <div className=" bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px] ">
            <h2>Densidad Semanal De Estudios</h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className>
            <LineChart
              width={800}
              height={300}
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
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
        <div className="basis-[30%] border-white shadow-md cursor-pointer rounded-[4px] ">
          <div className="bg-[#F8F9FC] flex items-center justify-between py-[10px] px-[20px] border-b-[1px] border-[#EDEDED] ">
            <h2>Almacenamiento</h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="pl-[25px] py-[5px]">
            <PieComponent />
          </div>
        </div>
      </div>

      <div>
        <div className="flex mt-[22px] w-full gap-[3px]">
          <div className="basis-[55%] border bg-white shadow-md cursor-pointer rounded-[4px]">
            <div className="bg-[#F8F9FC] flex flex-item-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDE]">
              <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
                Progeso Almacenamiento
              </h2>
              <FaEllipsisV color="gray" className="cursor-pointer" />
            </div>
            <div className="px-[25px] space-y-[15px] py-[15px]">
              <h2>Almacenamiento Restante esta semana</h2>
              <Progress percent={30} strokeColor="#E74A3B" />
            </div>
            <div className="px-[25px] space-y-[15px] py-[15px]">
              <h2>Almacenamiento Restante este Mes</h2>
              <Progress percent={30} status="active" strokeColor="#F6C23E" />
            </div>
            <div className="px-[25px] space-y-[15px] py-[15px]">
              <h2>Almacenamiento Restante Servidor</h2>
              <Progress percent={100} status="active" strokeColor="#4E73DF" />
            </div>
            <div className="px-[25px] space-y-[15px] py-[15px]">
              <h2>Poner algo mas</h2>
              <Progress percent={50} status="exception" strokeColor="#1CC88A" />
            </div>
          </div>
          <div className="basis-[45%] border">
            <h2>Cola De Estudios</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
