import type { ObjectId } from "mongodb"

export interface PokemonQueryComposition {
  search?: string
  type?: string
  _id?: ObjectId
  name?: string
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