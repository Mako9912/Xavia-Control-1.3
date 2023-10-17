import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Disponible", value: 400 },
  { name: "Ocupado", value: 300 },
];

const COLORS = ["#26a8b9", "#800912"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieComponent = () => {
  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <div className="grid grid-cols-2 ">
        {data.map((item, index) => (
          <div
            key={index}
            className=" flex items-center justify-center cursor-pointer font-bold"
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-around">
        {COLORS.map((item, index) => (
          <div
            style={{ background: item }}
            key={index}
            className="h-[30px] w-[30px] "
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieComponent;
