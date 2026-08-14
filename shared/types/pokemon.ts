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
