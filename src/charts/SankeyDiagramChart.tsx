import React from "react";
import { Sankey, Tooltip, ResponsiveContainer } from "recharts";
import ChartCard from "./ChartCard";

const data = {
  nodes: [
    { name: "Visit" },
    { name: "Direct" },
    { name: "Search" },
    { name: "Product A" },
    { name: "Product B" },
    { name: "Purchase" },
  ],
  links: [
    { source: 0, target: 1, value: 300 },
    { source: 0, target: 2, value: 700 },
    { source: 1, target: 3, value: 150 },
    { source: 1, target: 4, value: 150 },
    { source: 2, target: 3, value: 400 },
    { source: 2, target: 4, value: 300 },
    { source: 3, target: 5, value: 450 },
    { source: 4, target: 5, value: 100 },
  ],
};

const SankeyDiagramExample: React.FC = () => (
  <ChartCard title="Sankey Diagram">
    <ResponsiveContainer>
      <Sankey
        data={data}
        nodePadding={50}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        link={{ stroke: "#77c878" }}
      >
        <Tooltip wrapperClassName="bg-gray-800 rounded" />
      </Sankey>
    </ResponsiveContainer>
  </ChartCard>
);

export default SankeyDiagramExample;
