import type { PokemonData } from "../types/pokemon.ts";
import type { WithId, Document } from "mongodb";

export function parseAllResults(results: WithId<Document>[]): PokemonData[] {
  const parse = results.map((data) => ({
    _id: data._id.toString(),
    id: data.id,
    dex_entry: data.dex_entry,
    name: data.name,
    type: data.type,
    image: data.image,
    desc: data.desc,
    gen: data.gen,
    height: data.height,
    weight: data.weight,
    category: data.category,
  }))

  return parse
}

export function parseResult(result: WithId<Document>): PokemonData {
  return {
    _id: result._id.toString(),
    id: result.id,
    dex_entry: result.dex_entry,
    name: result.name,
    type: result.type,
    image: result.image,
    desc: result.desc,
    gen: result.gen,
    height: result.height,
    weight: result.weight,
    category: result.category,
  }
}