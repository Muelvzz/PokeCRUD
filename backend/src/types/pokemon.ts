import type { ObjectId } from "mongodb"

import type { PokemonData, ShowPokemonData } from "../../../shared/types/pokemon.ts"

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