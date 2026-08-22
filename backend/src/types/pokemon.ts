interface baseStats {
  hp: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
}

export interface PokemonFavoriteUpdate {
  isFavorite?: boolean
}

export interface PokemonPayload {
  _id: string
  id: number
  dex_entry: number
  name: string
  image: string
  type: string[]
  gen: number
  isFavorite: boolean
}

export interface SelectedPokemon extends PokemonPayload {
  height: number
  weight: number
  baseExp: number
  desc: string
  category: string
  baseStats: baseStats
  abilities: string[]
}
