import type { PokemonPayload } from "../types/pokemon.ts"

export function parsePayload(payload: PokemonPayload) {
  return {
    dex_entry: Number(payload.dex_entry ?? 0),
    name: payload.name,
    type: Array.isArray(payload.type) ? payload.type : [],
    image: payload.image,
    desc: String(payload.desc ?? ""),
    gen: Number(payload.gen ?? 0),
    height: Number(payload.height ?? 0),
    weight: Number(payload.weight ?? 0),
    category: String(payload.category ?? ""),
    isFavorite: payload.isFavorite ?? false,
  }
}