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

// update the interface of the PokemonQueryParams

export interface PokemonQueryParams {
  offset?: number
  search?: string
  type?: string
  _id?: ObjectId
  isFavorite?: boolean
}