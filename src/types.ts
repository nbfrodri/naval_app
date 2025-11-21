export const AppStatus = {
  IDLE: "IDLE",
  FILE_SELECTED: "FILE_SELECTED",
  PROCESSING: "PROCESSING",
  COMPLETE: "COMPLETE",
  ERROR: "ERROR",
} as const;

export type AppStatus = (typeof AppStatus)[keyof typeof AppStatus];

export interface ProcessLog {
  id: number;
  timestamp: string;
  message: string;
  type: "info" | "warning" | "success" | "error";
}

export interface ProcessingResponse {
  success: boolean;
  fileUrl?: string;
  error?: string;
}
