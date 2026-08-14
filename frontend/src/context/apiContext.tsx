import { createContext, useContext } from "react"
import type { PokemonData } from "../../../shared/types/pokemon"

export const PokemonContext = createContext<PokemonData[]>([])
export const usePokemons = () => useContext(PokemonContext)