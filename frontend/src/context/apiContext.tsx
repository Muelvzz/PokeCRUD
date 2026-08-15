import { createContext, useContext } from "react"
import type { PokemonData } from "../types/pokemonType"

export const PokemonContext = createContext<PokemonData[]>([])
export const usePokemons = () => useContext(PokemonContext)