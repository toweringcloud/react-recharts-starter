import React, { useState } from "react";

import BarChartExample from "./charts/BarChart";
import BubbleChartExample from "./charts/BubbleChart";
import KpiForecastChartExample from "./charts/ForecastChart";
import FunnelChartExample from "./charts/FunnelChart";
import HeatmapChartExample from "./charts/HeatmapChart";
import LineChartExample from "./charts/LineChart";
import MixedChartExample from "./charts/MixedChart";
import PieChartExample from "./charts/PieChart";
import RadarChartExample from "./charts/RadarChart";
import SankeyDiagramExample from "./charts/SankeyDiagramChart";
import ScatterChartExample from "./charts/ScatterChart";
import TreemapExample from "./charts/TreemapChart";

// 요청하신 차트 메뉴 리스트
const chartMenuList = [
  "Bar Chart",
  "Bubble Chart",
  "Forecast Chart",
  "Funnel Chart",
  "Heatmap Chart",
  "Line Chart",
  "Mixed Chart",
  "Pie Chart",
  "Radar Chart",
  "Sankey Diagram Chart",
  "Scatter Chart",
  "Treemap Chart",
];

const App: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("Bar Chart");

  const renderChart = () => {
    switch (selectedMenu) {
      case "Bar Chart":
        return <BarChartExample />;
      case "Bubble Chart":
        return <BubbleChartExample />;
      case "Forecast Chart":
        return <KpiForecastChartExample />;
      case "Funnel Chart":
        return <FunnelChartExample />;
      case "Heatmap Chart":
        return <HeatmapChartExample />;
      case "Line Chart":
        return <LineChartExample />;
      case "Mixed Chart":
        return <MixedChartExample />;
      case "Pie Chart":
        return <PieChartExample />;
      case "Radar Chart":
        return <RadarChartExample />;
      case "Sankey Diagram Chart":
        return <SankeyDiagramExample />;
      case "Scatter Chart":
        return <ScatterChartExample />;
      case "Treemap Chart":
        return <TreemapExample />;
      default:
        return <BarChartExample />;
    }
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      <header className="p-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold">Recharts Example Dashboard</h1>
        <p className="text-slate-400 mt-1">
          Using React, TypeScript, and Tailwind CSS
        </p>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 p-6 border-r border-slate-700">
          <h2 className="text-xl font-semibold mb-4">Chart Types</h2>
          <ul>
            {chartMenuList.map((menu) => (
              <li key={menu} className="mb-2 text-black">
                <button
                  onClick={() => setSelectedMenu(menu)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    selectedMenu === menu
                      ? "bg-blue-600 text-blue-700 font-bold"
                      : "hover:bg-slate-700 text-gray-500"
                  }`}
                >
                  {menu}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-10">{renderChart()}</main>
      </div>
    </div>
  );
};

export default App;
