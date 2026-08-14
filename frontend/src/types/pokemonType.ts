interface PokemonTypeData {
  type: string;
  color: string;
  icon?: string;
}

export const typeData: PokemonTypeData[] = [
  { type: "Bug", color: "#A3CF1799" },
  { type: "Dark", color: "#5B617099" },
  { type: "Dragon", color: "#0F70DE99" },
  { type: "Electric", color: "#FFE03399" },
  { type: "Fairy", color: "#E58DBE99" },
  { type: "Fighting", color: "#E6324B99" },
  { type: "Fire", color: "#FF9E3399" },
  { type: "Flying", color: "#8FA3E899" },
  { type: "Ghost", color: "#6463D699" },
  { type: "Grass", color: "#43CA4599" },
  { type: "Ground", color: "#E3884399" },
  { type: "Ice", color: "#69D2B799" },
  { type: "Normal", color: "#858A9499" },
  { type: "Poison", color: "#B545DB99" },
  { type: "Psychic", color: "#FF6D6D99" },
  { type: "Rock", color: "#C9B47C99" },
  { type: "Steel", color: "#4899A899" },
  { type: "Water", color: "#4DA6ED99" },
];

export interface PokemonCardProps {
  number: number;
  name: string;
  image: string;
  type: string[];
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