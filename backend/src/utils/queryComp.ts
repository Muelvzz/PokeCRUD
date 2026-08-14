import { ObjectId } from "mongodb"
import type { PokemonQueryComposition } from "../types/pokemon.ts"

export function queryComp(query: PokemonQueryComposition) {

  const { search, type, _id, name, isFavorite } = query
  let baseQuery: Record<string, unknown> = {}

  if (search && type) {
    baseQuery = {
      $or: [
        { name: search },
        { type },
      ],
    }
  }
   
  else if (search) { 
    baseQuery = { name: search } 
  }

  else if (type) { 
    baseQuery = { type } 
  }

  else if (_id) { 
    baseQuery = { _id: new ObjectId(_id) } 
  }

  else if (name) { 
    baseQuery = { $set: { name: name.trim() } } 
  }

  else if (isFavorite) { 
    baseQuery = { $set: { isFavorite: isFavorite } } 
  }

  return baseQuery
}
