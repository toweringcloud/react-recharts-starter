import React from "react";

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => {
  return (
    <div className="bg-slate-800 rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="h-96 w-full">{children}</div>
    </div>
  );
};

export default ChartCard;
