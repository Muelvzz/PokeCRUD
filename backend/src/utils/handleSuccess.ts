import type { SuccessResponse } from "../types/response.ts"
import type { NextFunction, Response } from "express"

export function handleSuccess(next: NextFunction, resultObject: SuccessResponse, res: Response) {

  const { status, message, data, totalItems } = resultObject
  console.log(`[${status}] ${message}`)
  
  res.status(status).json({ status, message, data, totalItems })

}