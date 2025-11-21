import React, { useState, useCallback } from "react";
import { AppStatus, type ProcessLog } from "./types";
import { executePythonScript } from "./services/pythonProcessor";
import { Terminal } from "./components/Terminal";
import { Radar } from "./components/Radar";
import { PdfViewer } from "./components/PdfViewer";

const App: React.FC = () => {
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const [file, setFile] = useState<File | null>(null);
  const [logs, setLogs] = useState<ProcessLog[]>([]);
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);

  // Helper to add logs
  const addLog = useCallback(
    (message: string, type: ProcessLog["type"] = "info") => {
      const now = new Date();
      const timeString = `${now.getHours().toString().padStart(2, "0")}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;

      setLogs((prev) => [
        ...prev,
        {
          id: Date.now(),
          timestamp: timeString,
          message,
          type,
        },
      ]);
    },
    []
  );

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      if (selectedFile.type !== "application/pdf") {
        addLog("Error: Invalid file type. Only PDF allowed.", "error");
        return;
      }
      setFile(selectedFile);
      setStatus(AppStatus.FILE_SELECTED);
      addLog(`Archivo cargado: ${selectedFile.name}`, "info");
      addLog(`Tamaño: ${(selectedFile.size / 1024).toFixed(2)} KB`, "info");
      addLog(
        "Esperando confirmación de usuario para iniciar agentes...",
        "warning"
      );
    }
  };

  // Handle "Execute Script" button
  const handleProcess = async () => {
    if (!file) return;

    setStatus(AppStatus.PROCESSING);
    setLogs([]); // Clear previous logs
    addLog("Iniciando entorno de ejecución Python...", "info");

    try {
      // Call the simulated service
      const processedBlob = await executePythonScript(file, (logEntry) => {
        addLog(logEntry.message, logEntry.type);
      });

      // Create URL for visualization
      const url = URL.createObjectURL(processedBlob);
      setProcessedUrl(url);
      setStatus(AppStatus.COMPLETE);
    } catch (error) {
      setStatus(AppStatus.ERROR);
      addLog(`Error crítico: ${error}`, "error");
    }
  };

  const handleReset = () => {
    if (processedUrl) URL.revokeObjectURL(processedUrl);
    setFile(null);
    setProcessedUrl(null);
    setLogs([]);
    setStatus(AppStatus.IDLE);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-4 md:p-8 flex flex-col items-center font-mono relative overflow-x-hidden">
      {/* Background Grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Header */}
      <header className="w-full max-w-6xl z-10 mb-8 flex flex-col md:flex-row justify-between items-center border-b-4 border-slate-800 pb-4">
        <div className="flex items-center space-x-4">
          <Radar />
          <div>
            <h1 className="text-3xl md:text-4xl font-military text-slate-100 tracking-tighter uppercase drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
              Naval AI <span className="text-cyan-500">Processor</span>
            </h1>
            <p className="text-xs md:text-sm text-slate-500 tracking-[0.3em] uppercase">
              Multi-Agent System // SRS Generation
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <div className="text-xs text-cyan-600">PROCESS STATUS</div>
          <div
            className={`text-xl font-bold tracking-wider ${
              status === AppStatus.PROCESSING
                ? "animate-pulse text-yellow-500"
                : "text-green-500"
            }`}
          >
            {status === AppStatus.IDLE && "STANDBY"}
            {status === AppStatus.FILE_SELECTED && "READY TO ENGAGE"}
            {status === AppStatus.PROCESSING && "AGENTS ACTIVE"}
            {status === AppStatus.COMPLETE && "DOC GENERATED"}
            {status === AppStatus.ERROR && "SYSTEM FAILURE"}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-6xl z-10 flex flex-col lg:flex-row gap-6 flex-grow">
        {/* Left Column: Controls & Logs */}
        <div
          className={`flex flex-col space-y-6 transition-all duration-500 ${
            status === AppStatus.COMPLETE ? "lg:w-1/3" : "lg:w-1/2 lg:mx-auto"
          }`}
        >
          {/* Upload Section */}
          {status !== AppStatus.COMPLETE && (
            <div className="bg-slate-900/80 border border-slate-700 p-1 relative group">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-500"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-500"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500"></div>

              <div className="border border-dashed border-slate-600 p-8 flex flex-col items-center justify-center text-center h-64 hover:bg-slate-800/50 transition-colors">
                {status === AppStatus.IDLE ? (
                  <>
                    <div className="w-16 h-16 mb-4 border-2 border-slate-500 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-slate-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </div>
                    <label className="cursor-pointer">
                      <span className="bg-cyan-900 text-cyan-100 px-4 py-2 text-sm font-bold uppercase hover:bg-cyan-800 transition-colors tracking-wider">
                        Cargar Documento PDF
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="mt-4 text-xs text-slate-500 uppercase">
                      Archivos de ingeniería naval (.PDF)
                    </p>
                  </>
                ) : (
                  <div className="w-full flex flex-col items-center animate-in fade-in zoom-in">
                    <div className="w-16 h-16 bg-cyan-900/20 rounded text-cyan-400 flex items-center justify-center mb-4 border border-cyan-500/30">
                      PDF
                    </div>
                    <p className="text-lg text-white font-bold mb-1">
                      {file?.name}
                    </p>
                    <p className="text-xs text-cyan-600 mb-6 uppercase">
                      Listo para procesamiento multi-agente
                    </p>

                    {status === AppStatus.FILE_SELECTED && (
                      <button
                        onClick={handleProcess}
                        className="w-full py-3 bg-gradient-to-r from-cyan-700 to-blue-800 hover:from-cyan-600 hover:to-blue-700 text-white font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.4)] active:scale-95 transition-all border-l-4 border-cyan-300"
                      >
                        EJECUTAR ORQUESTADOR
                      </button>
                    )}
                    {status === AppStatus.PROCESSING && (
                      <div className="w-full h-1 bg-slate-700 overflow-hidden">
                        <div className="h-full bg-cyan-400 animate-progress-indeterminate"></div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Terminal Log */}
          <Terminal logs={logs} />
        </div>

        {/* Right Column: Result */}
        {status === AppStatus.COMPLETE && processedUrl && (
          <div className="lg:w-2/3 h-[800px] lg:h-auto">
            <PdfViewer fileUrl={processedUrl} onReset={handleReset} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-6 z-10 mt-8 border-t border-slate-800">
        <p className="text-slate-600 text-xs uppercase tracking-widest">
          GENERACIÓN AUTOMÁTICA DE SRS // SISTEMA DEFENSA v3.1
        </p>
      </footer>
    </div>
  );
};

export default App;
