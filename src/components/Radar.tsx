import React from "react";

export const Radar: React.FC = () => {
  return (
    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-cyan-900 bg-slate-900 overflow-hidden shadow-[0_0_15px_rgba(8,145,178,0.3)]">
      {/* Grid lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-[1px] bg-cyan-900 opacity-50"></div>
        <div className="h-full w-[1px] bg-cyan-900 opacity-50 absolute"></div>
        <div className="w-2/3 h-2/3 rounded-full border border-cyan-900 opacity-50 absolute"></div>
        <div className="w-1/3 h-1/3 rounded-full border border-cyan-900 opacity-50 absolute"></div>
      </div>

      {/* Sweep animation */}
      <div className="absolute inset-0 origin-center animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(6,182,212,0.2)_360deg)]"></div>

      {/* Blips */}
      <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_5px_#22d3ee]"></div>
      <div
        className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_5px_#ef4444]"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
};
