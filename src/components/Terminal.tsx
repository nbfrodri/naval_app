import React, { useEffect, useRef } from "react";
import type { ProcessLog } from "../types";

interface TerminalProps {
  logs: ProcessLog[];
}

export const Terminal: React.FC<TerminalProps> = ({ logs }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  return (
    <div className="w-full bg-slate-950 border border-slate-700 rounded-sm overflow-hidden shadow-inner">
      <div className="bg-slate-800 px-4 py-1 flex items-center justify-between border-b border-slate-700">
        <span className="text-xs text-slate-400 uppercase tracking-widest">
          Output Log // Python Script Link
        </span>
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-slate-600"></div>
          <div className="w-2 h-2 rounded-full bg-slate-600"></div>
        </div>
      </div>
      <div className="p-4 h-48 overflow-y-auto font-mono text-sm">
        {logs.length === 0 && (
          <div className="text-slate-600 animate-pulse">
            Waiting for input stream...
          </div>
        )}
        {logs.map((log) => (
          <div key={log.id} className="mb-1">
            <span className="text-slate-500 mr-2">[{log.timestamp}]</span>
            <span
              className={`
              ${log.type === "info" ? "text-cyan-400" : ""}
              ${log.type === "warning" ? "text-yellow-500" : ""}
              ${log.type === "success" ? "text-green-400" : ""}
              ${log.type === "error" ? "text-red-500 font-bold" : ""}
            `}
            >
              {log.type === "info" && "> "}
              {log.type === "warning" && "! "}
              {log.type === "success" && "✓ "}
              {log.type === "error" && "X "}
              {log.message}
            </span>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
