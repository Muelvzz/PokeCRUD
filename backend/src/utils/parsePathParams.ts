import type { Request } from "express"
import type { PokemonPathParams } from "../types/pokemon.ts"
import { ObjectId } from "mongodb"

export function parsePathParams(req: Request): PokemonPathParams {

  const { _id } = req.params
  const parsed_id = Array.isArray(_id) ? _id[0] : _id
  return { _id: new ObjectId(parsed_id) }

}