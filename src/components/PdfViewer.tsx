import React from "react";

interface PdfViewerProps {
  fileUrl: string;
  onReset: () => void;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl, onReset }) => {
  return (
    <div className="w-full h-full flex flex-col animate-in fade-in zoom-in duration-500">
      <div className="flex justify-between items-center mb-4 border-b-2 border-cyan-900 pb-2">
        <h2 className="text-xl text-cyan-400 tracking-widest font-bold uppercase">
          Informe Generado (SRS)
        </h2>
        <div className="flex space-x-4">
          <button
            onClick={onReset}
            className="px-4 py-1 border border-slate-600 text-slate-400 hover:text-white hover:border-white text-xs uppercase transition-colors"
          >
            Nuevo Análisis
          </button>
          <a
            href={fileUrl}
            download="SRS_Corporativo_Navantia.html"
            className="px-4 py-1 bg-cyan-700 text-white text-xs font-bold uppercase hover:bg-cyan-600 transition-colors shadow-[0_0_10px_rgba(8,145,178,0.5)] flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0l-4 4m4-4v12"
              />
            </svg>
            Descargar Informe
          </a>
        </div>
      </div>

      <div className="flex-grow border-2 border-slate-700 bg-white relative rounded-sm overflow-hidden min-h-[500px]">
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500 z-10"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500 z-10"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500 z-10"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500 z-10"></div>

        <iframe
          src={fileUrl}
          className="w-full h-full"
          title="Processed Report"
        />
      </div>
    </div>
  );
};
