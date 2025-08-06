import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import ChartCard from "./ChartCard";

// Sample data: study hours vs. exam scores for two different groups
const dataGroup1 = [
  { hours: 1, score: 45 },
  { hours: 2, score: 55 },
  { hours: 3, score: 72 },
  { hours: 4, score: 78 },
  { hours: 5, score: 85 },
  { hours: 6, score: 90 },
];

const dataGroup2 = [
  { hours: 1, score: 35 },
  { hours: 2, score: 48 },
  { hours: 3, score: 65 },
  { hours: 4, score: 68 },
  { hours: 5, score: 75 },
  { hours: 6, score: 82 },
];

const ScatterChartExample: React.FC = () => (
  <ChartCard title="Scatter Chart: Study Hours vs. Exam Score">
    <ResponsiveContainer>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
        <XAxis
          type="number"
          dataKey="hours"
          name="Study Hours"
          unit="h"
          stroke="#A0AEC0"
        />
        <YAxis
          type="number"
          dataKey="score"
          name="Exam Score"
          unit="pts"
          stroke="#A0AEC0"
        />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          wrapperClassName="bg-gray-800 rounded"
        />
        <Legend />
        <Scatter name="Group A" data={dataGroup1} fill="#8884d8" />
        <Scatter name="Group B" data={dataGroup2} fill="#82ca9d" />
      </ScatterChart>
    </ResponsiveContainer>
  </ChartCard>
);

export default ScatterChartExample;
