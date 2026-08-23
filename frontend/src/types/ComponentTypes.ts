import type { ShowPokemonData } from "./pokemonType"

export interface FilterButtonTypes {
  filterRef: React.RefObject<HTMLDivElement | null>
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>
  isFilterOpen: boolean
  pokemonType: string
  setPokemonType: React.Dispatch<React.SetStateAction<string>>
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export interface PokemonCardProps {
    pokemon: ShowPokemonData;
    onClick: () => void;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

export interface PatchPokemonFavoriteType {
  _id: string
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>
}