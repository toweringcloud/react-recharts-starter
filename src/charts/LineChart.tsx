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

const data = [
  { name: "Jan", revenue: 4000, cost: 2400 },
  { name: "Feb", revenue: 3000, cost: 1398 },
  { name: "Mar", revenue: 5000, cost: 9800 },
  { name: "Apr", revenue: 4780, cost: 3908 },
  { name: "May", revenue: 5890, cost: 4800 },
  { name: "Jun", revenue: 4390, cost: 3800 },
  { name: "Jul", revenue: 5490, cost: 4300 },
];

const LineChartExample: React.FC = () => (
  <ResponsiveContainer>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
      <XAxis dataKey="name" stroke="#A0AEC0" />
      <YAxis stroke="#A0AEC0" />
      <Tooltip wrapperClassName="bg-gray-800 rounded" />
      <Legend />
      <Line
        type="monotone"
        dataKey="revenue"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="cost" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

export default LineChartExample;
