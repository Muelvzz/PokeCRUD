import type { ObjectId } from "mongodb"

export interface PokemonFavoriteUpdate {
  isFavorite?: boolean
}

export interface SuccessResponse extends ApiError {
  data: unknown
}

export interface PokemonPayload extends Omit<PokemonData, "_id" | "baseExp" | "baseStats" | "abilities"> {
  isFavorite?: boolean
}

export interface PokemonPathParams {
  _id: ObjectId
}

export interface PokemonQueryParams {
  offset: number
  search: string
  type: string
}

export interface PokemonQueryComposition {
  search?: string
  type?: string
  _id?: ObjectId
  name?: string
  isFavorite?: boolean
}

export interface ApiError {
  status: number
  message: string
}

interface baseStats {
  hp: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
}

export interface ShowPokemonData {
  _id: string
  id: number
  dex_entry: number
  name: string
  image: string
  type: string[]
}

export interface PokemonData extends ShowPokemonData {
  height: number
  weight: number
  baseExp: number
  desc: string
  gen: number
  category: string
  baseStats: baseStats
  abilities: string[]
}
