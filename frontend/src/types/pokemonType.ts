import bug from '../assets/icons/type-icons/bug.svg';
import dark from '../assets/icons/type-icons/dark.svg';
import dragon from '../assets/icons/type-icons/dragon.svg';
import electric from '../assets/icons/type-icons/electric.svg';
import fairy from '../assets/icons/type-icons/fairy.svg';
import fighting from '../assets/icons/type-icons/fighting.svg';
import fire from '../assets/icons/type-icons/fire.svg';
import flying from '../assets/icons/type-icons/flying.svg';
import ghost from '../assets/icons/type-icons/ghost.svg';
import grass from '../assets/icons/type-icons/grass.svg';
import ground from '../assets/icons/type-icons/ground.svg';
import ice from '../assets/icons/type-icons/ice.svg';
import normal from '../assets/icons/type-icons/normal.svg';
import poison from '../assets/icons/type-icons/poison.svg';
import psychic from '../assets/icons/type-icons/psychic.svg';
import rock from '../assets/icons/type-icons/rock.svg';
import steel from '../assets/icons/type-icons/steel.svg';
import water from '../assets/icons/type-icons/water.svg';

interface PokemonTypeData {
  type: string;
  color: string;
  icon?: string;
}

export const typeData: PokemonTypeData[] = [
    { type: "Bug", color: "#A3CF17", icon: bug },
    { type: "Dark", color: "#5B6170", icon: dark },
    { type: "Dragon", color: "#0F70DE", icon: dragon },
    { type: "Electric", color: "#FFE033", icon: electric },
    { type: "Fairy", color: "#E58DBE", icon: fairy },
    { type: "Fighting", color: "#E6324B", icon: fighting },
    { type: "Fire", color: "#FF9E33", icon: fire },
    { type: "Flying", color: "#8FA3E8", icon: flying },
    { type: "Ghost", color: "#6463D6", icon: ghost },
    { type: "Grass", color: "#43CA45", icon: grass },
    { type: "Ground", color: "#E38843", icon: ground },
    { type: "Ice", color: "#69D2B7", icon: ice },
    { type: "Normal", color: "#858A94", icon: normal },
    { type: "Poison", color: "#B545DB", icon: poison },
    { type: "Psychic", color: "#FF6D6D", icon: psychic },
    { type: "Rock", color: "#C9B47C", icon: rock },
    { type: "Steel", color: "#4899A8", icon: steel },
    { type: "Water", color: "#4DA6ED", icon: water },
];

export interface PokemonCardProps extends ContextRefresh{
  number: number;
  name: string;
  image: string;
  type: string[];
  uniqueId: string
  isFavorite: boolean
}

export interface TypeTagProps {
  type: string;
}

export const pokemonTypes = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

export type PokemonContextType = {
  pokemonType: string;
  setPokemonType: React.Dispatch<React.SetStateAction<string>>;
};

export type PokemonContextSearch = {
  pokemonSearch: string;
  setPokemonSearch: React.Dispatch<React.SetStateAction<string>>;
}

export type ContextRefresh = {
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

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
  isFavorite: boolean
}