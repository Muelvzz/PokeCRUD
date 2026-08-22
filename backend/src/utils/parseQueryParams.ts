import type { Request } from "express"
import type { PokemonQueryParams } from "../types/parameters.ts"
import { ObjectId } from "mongodb"

export function parseQueryParams(req: Request): PokemonQueryParams {
  const { offset, search, type, _id } = req.query

  const parsedOffset =
    typeof offset === "string" ? parseInt(offset, 10) : 0

  const parsedSearch =
    typeof search === "string" ? search.trim() : ""

  const parsedType =
    typeof type === "string" ? type.trim() : ""

  const parsed_id = new ObjectId(_id?.toString())

  return {
    offset: parsedOffset,
    search: parsedSearch,
    type: parsedType,
    _id: parsed_id
  }
}