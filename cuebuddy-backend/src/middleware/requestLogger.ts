import { NextFunction, Request, Response } from "express";
import { createRequestId } from "../utils/requestId.js";
import { logApiRequestToDatabase } from "../services/databaseService.js";

declare global {
  namespace Express {
    interface Request {
      requestId?: string;
      startedAtMs?: number;
    }
  }
}

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  req.requestId = createRequestId();
  req.startedAtMs = Date.now();

  res.setHeader("x-request-id", req.requestId);

  res.on("finish", () => {
    const durationMs = Date.now() - (req.startedAtMs ?? Date.now());

    const logPayload = {
      level: res.statusCode >= 500 ? "error" : "info",
      requestId: req.requestId,
      method: req.method,
      path: req.path,
      statusCode: res.statusCode,
      durationMs,
      timestamp: new Date().toISOString(),
    };

    console.log(JSON.stringify(logPayload));

    if (req.requestId) {
      void logApiRequestToDatabase({
        requestId: req.requestId,
        method: req.method,
        path: req.path,
        statusCode: res.statusCode,
        durationMs,
        ip: req.ip,
        userAgent: req.get("user-agent") ?? null,
      });
    }
  });

  next();
}
