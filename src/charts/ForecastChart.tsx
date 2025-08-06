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
import ChartCard from "./ChartCard";

const data = [
  { name: "Q1", actual: 120, forecast: 120 },
  { name: "Q2", actual: 150, forecast: 150 },
  { name: "Q3", actual: 130, forecast: 130 },
  { name: "Q4", actual: 180, forecast: 180 },
  { name: "Q1-Next", forecast: 200 },
  { name: "Q2-Next", forecast: 220 },
];

const KpiForecastChartExample: React.FC = () => (
  <ChartCard title="Forecast Chart">
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
        <XAxis dataKey="name" stroke="#A0AEC0" />
        <YAxis stroke="#A0AEC0" />
        <Tooltip wrapperClassName="bg-gray-800 rounded" />
        <Legend />
        <Line
          type="monotone"
          dataKey="actual"
          stroke="#8884d8"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="forecast"
          stroke="#82ca9d"
          strokeWidth={2}
          strokeDasharray="5 5"
        />
      </LineChart>
    </ResponsiveContainer>
  </ChartCard>
);

export default KpiForecastChartExample;
