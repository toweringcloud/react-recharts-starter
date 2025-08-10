import React from "react";
import {
  FunnelChart,
  Funnel,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import ChartCard from "../layouts/ChartCard";

const data = [
  { value: 100, name: "Visit", fill: "#8884d8" },
  { value: 80, name: "Sign-up", fill: "#83a6ed" },
  { value: 50, name: "Purchase", fill: "#8dd1e1" },
  { value: 40, name: "Inquiry", fill: "#82ca9d" },
  { value: 26, name: "Re-purchase", fill: "#a4de6c" },
];

const FunnelChartExample: React.FC = () => (
  <ChartCard title="Funnel Chart">
    <ResponsiveContainer>
      <FunnelChart>
        <Tooltip wrapperClassName="bg-gray-800 rounded" />
        <Funnel dataKey="value" data={data} isAnimationActive>
          <LabelList
            position="right"
            fill="#fff"
            stroke="none"
            dataKey="name"
          />
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  </ChartCard>
);

export default FunnelChartExample;
