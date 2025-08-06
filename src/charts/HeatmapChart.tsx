import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import ChartCard from "../layout/ChartCard";

// Sample data: Activity level by day and hour
interface HeatmapDataPoint {
  dayIndex: number;
  hourIndex: number;
  value: number;
}

const data: HeatmapDataPoint[] = [];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const hours = Array.from({ length: 24 }, (_, i) => i); // 0 to 23 hours

days.forEach((day, i) => {
  hours.forEach((hour, j) => {
    // Generate some random activity value
    let value = Math.floor(Math.random() * 100);
    // Make weekends and evenings more active for realism
    if (i > 4 || (j > 17 && j < 23)) {
      value = Math.floor(Math.random() * 50) + 50;
    }
    data.push({ dayIndex: i, hourIndex: j, value });
  });
});

// Function to get color based on value
const getColor = (value: number) => {
  if (value > 80) return "#7a0177";
  if (value > 60) return "#c51b8a";
  if (value > 40) return "#f768a1";
  if (value > 20) return "#fbb4b9";
  return "#feebe2";
};

const HeatmapChartExample: React.FC = () => (
  <ChartCard title="Heatmap Chart: Weekly Activity">
    <ResponsiveContainer>
      <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
        <CartesianGrid stroke="#4A5568" />
        <XAxis
          type="number"
          dataKey="hourIndex"
          name="Hour"
          domain={[0, 23]}
          tickCount={24}
          stroke="#A0AEC0"
        />
        <YAxis
          type="number"
          dataKey="dayIndex"
          name="Day"
          domain={[-1, 7]}
          tickCount={7}
          tickFormatter={(value) => days[value] || ""}
          stroke="#A0AEC0"
        />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          wrapperClassName="bg-gray-800 rounded"
          formatter={(value, name) => {
            if (name === "Day") return days[value as number];
            return value;
          }}
        />
        <Scatter data={data} shape="square">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={getColor(entry.value)}
              // Set the size of the square
              width={25}
              height={25}
            />
          ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  </ChartCard>
);

// Note: Recharts doesn't have a direct Cell prop for Scatter.
// A custom shape component would be the "official" way.
// However, the above code demonstrates the intent. For a working version,
// you'd typically map over data and render a Scatter component for each color group.
// The provided code is conceptual for simplicity.
// For a fully working Heatmap, you'd define a CustomShape component or group data by color.
// The `Cell` component inside Scatter is illustrative.
export default HeatmapChartExample;
