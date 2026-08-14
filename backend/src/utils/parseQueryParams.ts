import type { Request } from "express"
import type { PokemonQueryParams } from "../types/pokemon"

export function parseQueryParams(req: Request): PokemonQueryParams {
  const { offset, search, type } = req.query

  const parsedOffset =
    typeof offset === "string" ? parseInt(offset, 10) : 0

  const parsedSearch =
    typeof search === "string" ? search.trim() : ""

  const parsedType =
    typeof type === "string" ? type.trim() : ""

  return {
    offset: parsedOffset,
    search: parsedSearch,
    type: parsedType,
  }
}