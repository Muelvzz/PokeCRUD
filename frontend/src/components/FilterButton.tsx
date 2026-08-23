import type { FilterButtonTypes } from "../types/ComponentTypes";
import filterIcon from '../assets/icons/filter-icon.svg';
import { pokemonTypes } from '../types/pokemonType';

export default function FilterButton({ filterRef, setIsFilterOpen, isFilterOpen, pokemonType, setPokemonType, setRefresh, setCurrentPage }: FilterButtonTypes) {
  return (
    <>
      <div className='relative' ref={filterRef}>
        <button 
          type="button" 
          onClick={() => setIsFilterOpen(prev => !prev)} 
          aria-label="Filter Pokémon" 
          aria-expanded={isFilterOpen} 
          className="p-2 rounded-xl bg-[#1F1F1F] hover:bg-[#333333] text-white shrink-0"
        >
          <img src={filterIcon} alt="Filter" width="28" height="28" />
        </button>
        
        {isFilterOpen && (
          <select
            id="pokemon-type"
            value={pokemonType}
            onChange={(e) => {
                setPokemonType(e.target.value);
                setIsFilterOpen(false);
                setRefresh(prev => !prev)
                setCurrentPage(0)
            }}
            className="border rounded-lg px-3 py-2 absolute right-0 top-12"
        >
            <option value="all">All Types</option>
            {pokemonTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
            ))}
          </select>
        )}
      </div>
    </>
  )
}