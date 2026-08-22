import { useState } from "react";
import { typeData, type PokemonData } from "../types/pokemonType";
import TypeTag from "./TypeTag";
import pokeball from "../assets/icons/Pokeball.png";

interface PokemonModalProps {
  pokemon: PokemonData;
  onClose: () => void;
}

function PokemonModal({ pokemon, onClose }: PokemonModalProps) {
  const typeInfo = typeData.find(
    (item) => item.type.toLowerCase() === pokemon.type[0]?.toLowerCase()
  );

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Calculate total stats
  const totalStats =
    (pokemon.baseStats.hp) +
    (pokemon.baseStats.attack) +
    (pokemon.baseStats.defense) +
    (pokemon.baseStats.specialAttack) +
    (pokemon.baseStats.specialDefense) +
    (pokemon.baseStats.speed);

  const renderStatRow = (label: string, value: number) => {
    const percentage = Math.min(100, Math.max(0, (value / 255) * 100));
    return (
      <div className="flex items-center gap-2 text-sm text-gray-700">
        <span className="w-20 text-left font-medium">{label}</span>
        <span className="w-8 text-right font-bold text-black">{value}</span>
        <div className="flex-1 bg-gray-200 rounded-full h-3.5 overflow-hidden">
          <div
            className="bg-black h-full rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-0 md:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full h-full md:h-auto md:w-4/5 lg:w-2/3 bg-white p-6 md:rounded-[32px] flex flex-col md:grid md:grid-cols-2 md:items-center gap-6 overflow-y-auto relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Column: Image & Basic Info */}
        <div className="flex flex-col items-start w-full">
          <div
            className="w-full aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden"
            style={{
              backgroundColor: `${typeInfo?.color}90`,
            }}
          >
            {!isImageLoaded && (
              <img
                src={pokeball}
                alt="Loading Pokémon"
                className="w-1/3 opacity-50 animate-spin"
              />
            )}

            <img
              src={pokemon.image}
              alt={pokemon.name}
              onLoad={() => setIsImageLoaded(true)}
              className={`w-full h-full object-contain p-4 transition-opacity duration-300 ${
                isImageLoaded ? "opacity-100" : "opacity-0 absolute"
              }`}
            />
          </div>

          {/* Dex Entry, Title & Type */}
          <div className="mt-4 w-full text-center">
            <span className="text-gray-500 font-semibold text-lg">
                #{String(pokemon.dex_entry).padStart(4, "0")}
            </span>

            <h1 className="text-3xl md:text-4xl font-extrabold text-black capitalize">
              {pokemon.name}
            </h1>

            <span className="text-gray-500 font-semibold"><i>"{pokemon.category}"</i></span>

            <div className="flex justify-center">
                <div className="flex gap-2">
                {pokemon.type.map((typeName) => (
                    <TypeTag key={typeName} type={typeName} />
                ))}
                </div>
            </div>
          </div>
        </div>

        {/* Right Column: Stats & Abilities */}
        <div className="flex flex-col justify-between h-full py-6">
          <div className="space-y-5 flex flex-col gap-y-5 md:gap-y-3">
            {/* Overview Section */}
            <div>
              <h2 className="text-xl font-bold text-black border-b border-gray-300 pb-1 text-center">
                Overview
              </h2>
              <div>
                <p className="text-center">
                    {pokemon.desc}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center mt-3">
                <div>
                  <p className="font-bold text-black text-base">Height</p>
                  <p className="text-sm text-gray-600">{pokemon.height} m</p>
                </div>
                <div>
                  <p className="font-bold text-black text-base">Weight</p>
                  <p className="text-sm text-gray-600">{pokemon.weight} kg</p>
                </div>
                <div>
                  <p className="font-bold text-black text-base">Base Exp.</p>
                  <p className="text-sm text-gray-600">{pokemon.baseExp}</p>
                </div>
              </div>
            </div>

            {/* Base Stats Section */}
            <div>
              <h2 className="text-xl font-bold text-black mb-2 text-center">Base Stats</h2>
              <div className="space-y-1.5">
                {renderStatRow("Hp", pokemon.baseStats.hp)}
                {renderStatRow("Attack", pokemon.baseStats.attack)}
                {renderStatRow("Defense", pokemon.baseStats.defense)}
                {renderStatRow("Sp. Attack", pokemon.baseStats.specialAttack)}
                {renderStatRow("Sp. Defense", pokemon.baseStats.specialDefense)}
              </div>

              {/* Total Row */}
              <div className="border-t border-black/80 mt-3 pt-2 flex items-center text-sm font-bold text-black">
                <span className="w-20 text-right">Total</span>
                <span className="w-8 text-right ml-2">{totalStats}</span>
              </div>
            </div>

            {/* Abilities Section */}
            <div>
              <h2 className="text-xl font-bold text-black mb-1 text-center">Abilities</h2>
              <div className="flex flex-wrap gap-4 text-sm text-gray-800">
                {pokemon.abilities.map((ability, idx) => (
                  <div key={ability} className="flex flex-col">
                    <span className="font-medium capitalize">{ability}</span>
                    {idx === 1 && (
                      <span className="text-[10px] text-gray-400 -mt-1">
                        (Hidden Ability)
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-3 pt-4">
            <button
              type="button"
              className="px-5 py-2.5 rounded-xl border border-black font-semibold text-black hover:bg-gray-100 transition-colors"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-gray-300 hover:bg-gray-400 font-semibold text-black transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonModal;