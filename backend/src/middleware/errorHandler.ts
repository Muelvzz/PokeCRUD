import type { NextFunction, Request, Response } from "express"
import type { ApiError } from "../types/response.ts"

export function errorHandler(err: ApiError, req: Request, res: Response, next: NextFunction) {

  const status = err.status || 500
  const message = err.message || "Internal Server Error"

  res.status(status).json({ status, message })
}