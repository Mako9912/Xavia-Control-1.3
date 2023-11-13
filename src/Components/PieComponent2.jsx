import React from "react";

import { PieChart, pieArcClasses } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, value: 25, label: "Disponible" },
  { id: 1, value: 80, label: "Ocupado" },
];

const PieComponent2 = () => {
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} `,
          arcLabelMinAngle: 45,

          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30 },
        },
      ]}
      sx={{
        [`& .${pieArcClasses.faded}`]: {
          fill: "gray",
        },
      }}
      height={300}
    />
  );
};

export default PieComponent2;
