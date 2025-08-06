import React from "react";
import { Treemap, ResponsiveContainer } from "recharts";
import ChartCard from "./ChartCard";

const data = [
  {
    name: "Asia",
    children: [
      { name: "South Korea", size: 400 },
      { name: "Japan", size: 1000 },
      { name: "China", size: 2000 },
    ],
  },
  {
    name: "Europe",
    children: [
      { name: "Germany", size: 800 },
      { name: "France", size: 700 },
      { name: "UK", size: 600 },
    ],
  },
  {
    name: "America",
    children: [
      { name: "USA", size: 1500 },
      { name: "Canada", size: 500 },
    ],
  },
];

const TreemapExample: React.FC = () => (
  <ChartCard title="Treemap Chart">
    <ResponsiveContainer>
      <Treemap data={data} dataKey="size" stroke="#fff" fill="#8884d8" />
    </ResponsiveContainer>
  </ChartCard>
);

export default TreemapExample;
