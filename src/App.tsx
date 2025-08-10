import { useState } from "react";

import BarChart from "./charts/BarChart";
import BubbleChart from "./charts/BubbleChart";
import KpiForecastChart from "./charts/ForecastChart";
import FunnelChart from "./charts/FunnelChart";
import HeatmapChart from "./charts/HeatmapChart";
import LineChart from "./charts/LineChart";
import MixedChart from "./charts/MixedChart";
import PieChart from "./charts/PieChart";
import RadarChart from "./charts/RadarChart";
import SankeyChart from "./charts/SankeyChart";
import ScatterChart from "./charts/ScatterChart";
import TreemapChart from "./charts/TreemapChart";

const Sidebar = ({
  chartTypes,
  selectedMenu,
  setSelectedMenu,
}: {
  chartTypes: string[];
  selectedMenu: string;
  setSelectedMenu: (chart: string) => void;
}) => (
  <nav className="w-40 p-4 border-r border-slate-700">
    <h2 className="text-xl font-semibold mb-4">Chart Types</h2>
    <ul className="text-sm">
      {chartTypes.map((menu) => (
        <li key={menu} className="mb-2 text-black">
          <button
            onClick={() => setSelectedMenu(menu)}
            className={`w-full text-left hover:bg-blue-200 hover:text-black cursor-pointer rounded ${
              selectedMenu === menu
                ? "bg-blue-200 text-blue-700 font-bold"
                : "text-gray-500"
            }`}
          >
            {menu}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

const ChartCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-gray-800 rounded-lg shadow-2xl h-full flex flex-col p-6">
    <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
    <div className="flex-grow relative">{children}</div>
  </div>
);

const App = () => {
  const chartTypes = [
    "Bar",
    "Bubble",
    "Forecast",
    "Funnel",
    "Heatmap",
    "Line",
    "Mixed",
    "Pie",
    "Radar",
    "Sankey",
    "Scatter",
    "Treemap",
  ];
  const [selectedChart, setSelectedChart] = useState<string>(chartTypes[0]);

  const chartComponents: { [key: string]: React.ReactElement } = {
    Bar: <BarChart />,
    Bubble: <BubbleChart />,
    Forecast: <KpiForecastChart />,
    Funnel: <FunnelChart />,
    HeatMap: <HeatmapChart />,
    Line: <LineChart />,
    Mixed: <MixedChart />,
    Pie: <PieChart />,
    Radar: <RadarChart />,
    Sankey: <SankeyChart />,
    Scatter: <ScatterChart />,
    TreeMap: <TreemapChart />,
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      <header className="p-6 border-b border-slate-700 mb-4">
        <h1 className="text-3xl font-bold">Recharts Example Dashboard</h1>
        <p className="text-slate-400 mt-1">
          Using TypeScript, React, and TailwindCSS
        </p>
      </header>
      <div className="flex">
        <Sidebar
          chartTypes={chartTypes}
          selectedMenu={selectedChart}
          setSelectedMenu={setSelectedChart}
        />
        <main className="flex-1 p-6 lg:p-10">
          <ChartCard title={`${selectedChart} Chart`}>
            {chartComponents[selectedChart]}
          </ChartCard>
        </main>
      </div>
    </div>
  );
};

export default App;
