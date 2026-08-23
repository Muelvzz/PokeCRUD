import type { PokemonData } from "../types/pokemonType"

export interface FetchPokemonPayloadTypes {
  pokemonType: string
  pokemonSearch: string
  currentPage: number
  setPokemons: React.Dispatch<React.SetStateAction<PokemonData[]>>
  setTotalPages: React.Dispatch<React.SetStateAction<number>>
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export interface FetchSelectedPokemonTypes {
  _id: string,
  setModalData: React.Dispatch<React.SetStateAction<PokemonData | null>>
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}