import { ObjectId } from "mongodb"
import { ShowPokemonData } from "../../../shared/types/pokemon"

export interface PokemonFavoriteUpdate {
  isFavorite: boolean
}

export interface SuccessResponse extends ApiError {
  data: ShowPokemonData[] | ShowPokemonData
}

export interface PokemonPayload extends ShowPokemonData, PokemonFavoriteUpdate { }

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