import { ObjectId } from "mongodb"
import type { PokemonQueryComposition } from "../types/pokemon.ts"

export function queryComp(query: PokemonQueryComposition) {
  const { search, type, _id, name, isFavorite } = query
  let baseQuery: Record<string, unknown> = {}

  if (search && type) {
    baseQuery = {
      $or: [{ name: { $regex: search, $options: "i" } }, { type }],
    }
  } else if (search) {
    baseQuery = { name: { $regex: search, $options: "i" } }
  } else if (type) {
    baseQuery = { type }
  } else if (_id) {
    baseQuery = { _id: new ObjectId(_id.toString()) }
  } else if (name !== undefined) {
    baseQuery = { $set: { name: name.trim() } }
  } else if (isFavorite !== undefined) {
    baseQuery = { $set: { isFavorite } }
  }

  return baseQuery
}