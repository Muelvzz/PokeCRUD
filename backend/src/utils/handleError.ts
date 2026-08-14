import type { ApiError } from "../types/pokemon.ts"
import type { NextFunction } from "express"

export function handleError(next: NextFunction, errorObject: ApiError) {

  const { status, message } = errorObject
  console.error(`[${status}] ${message}`)
  next(errorObject)

}