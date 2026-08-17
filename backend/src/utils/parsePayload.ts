import { ObjectId } from "mongodb"
import type { PokemonPayload } from "../types/pokemon.ts"

export function parsePayload(payload: PokemonPayload) {
  return {
    dex_entry: Number(payload.dex_entry ?? 0),
    name: payload.name,
    type: Array.isArray(payload.type) ? payload.type : [],
    image: payload.image,
    gen: Number(payload.gen),
    // desc: String(payload.desc ?? ""),
    // height: Number(payload.height ?? 0),
    // weight: Number(payload.weight ?? 0),
    // category: String(payload.category ?? ""),
    // isFavorite: payload.isFavorite ?? false,
  }
}