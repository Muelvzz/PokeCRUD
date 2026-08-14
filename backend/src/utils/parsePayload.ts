import type { PokemonPayload } from "../types/pokemon.ts"

export function parsePayload(payload: PokemonPayload) {
  const newPokemon = {
    dex_entry: payload.dex_entry,
    name: payload.name,
    type: payload.type,
    image: payload.image,
    desc: payload.desc,
    gen: payload.gen,
    height: payload.height,
    weight: payload.weight,
    category: payload.category,
    isFavorite: payload.isFavorite ?? false,
  }

  return newPokemon
}