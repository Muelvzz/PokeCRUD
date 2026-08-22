import type { PokemonPayload, SelectedPokemon } from "../types/pokemon.ts"
import type { WithId, Document } from "mongodb"

function normalizeBaseStats(data: Record<string, unknown> | undefined) {
  return {
    hp: Number(data?.hp ?? 0),
    attack: Number(data?.attack ?? 0),
    defense: Number(data?.defense ?? 0),
    specialAttack: Number(data?.specialAttack ?? 0),
    specialDefense: Number(data?.specialDefense ?? 0),
    speed: Number(data?.speed ?? 0),
  }
}

export function parseAllResults(results: WithId<Document>[]): PokemonPayload[] {
  return results.map((result) => parseResult(result))
}

export function parseResult(result: WithId<Document>): SelectedPokemon {
  return {
    _id: String(result._id ?? ""),
    id: Number(result.id ?? 0),
    dex_entry: Number(result.dex_entry ?? 0),
    name: String(result.name ?? ""),
    image: String(result.image ?? ""),
    type: Array.isArray(result.type) ? result.type.map(String) : [],
    gen: Number(result.gen ?? 0),
    height: Number(result.height ?? 0),
    weight: Number(result.weight ?? 0),
    baseExp: Number(result.baseExp ?? 0),
    desc: String(result.desc ?? ""),
    category: String(result.category ?? ""),
    baseStats: normalizeBaseStats(result.baseStats as Record<string, unknown> | undefined),
    abilities: Array.isArray(result.abilities) ? result.abilities.map(String) : [],
  }
}