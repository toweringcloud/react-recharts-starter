import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400 },
  { name: "Page B", uv: 3000, pv: 1398 },
  { name: "Page C", uv: 2000, pv: 9800 },
  { name: "Page D", uv: 2780, pv: 3908 },
  { name: "Page E", uv: 1890, pv: 4800 },
  { name: "Page F", uv: 2390, pv: 3800 },
  { name: "Page G", uv: 3490, pv: 4300 },
];

const BarChartExample: React.FC = () => (
  <ResponsiveContainer>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
      <XAxis dataKey="name" stroke="#A0AEC0" />
      <YAxis stroke="#A0AEC0" />
      <Tooltip wrapperClassName="bg-gray-800 rounded" />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartExample;
