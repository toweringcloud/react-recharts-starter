import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import ChartCard from "../layout/ChartCard";

const data = [
  { subject: "Math", A: 120, B: 110, fullMark: 150 },
  { subject: "Chinese", A: 98, B: 130, fullMark: 150 },
  { subject: "English", A: 86, B: 130, fullMark: 150 },
  { subject: "Geography", A: 99, B: 100, fullMark: 150 },
  { subject: "Physics", A: 85, B: 90, fullMark: 150 },
  { subject: "History", A: 65, B: 85, fullMark: 150 },
];

const RadarChartExample: React.FC = () => (
  <ChartCard title="Radar Chart">
    <ResponsiveContainer>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="#4A5568" />
        <PolarAngleAxis dataKey="subject" stroke="#A0AEC0" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#A0AEC0" />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="Lily"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  </ChartCard>
);

export default RadarChartExample;
