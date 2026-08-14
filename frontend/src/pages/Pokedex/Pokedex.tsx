import { useState, useRef, useEffect } from 'react';

import pokeball from '../../assets/icons/Pokeball.png';
import pokeballMissing from '../../assets/icons/Pokeball-missing.png'
import SearchBar from '../../components/SearchBar';
import filterIcon from '../../assets/icons/filter-icon.svg';
import PokemonCard from '../../components/PokemonCard';

import { usePokemons } from '../../context/apiContext';
import { useOutletContext } from 'react-router-dom';

import { type PokemonContextType, type PokemonContextSearch, type ContextRefresh, pokemonTypes } from '../../types/pokemonType';

function Pokedex() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const filterRef = useRef<HTMLDivElement>(null);

    const pokemons = usePokemons()
    const { pokemonType, setPokemonType } = useOutletContext<PokemonContextType>()
    const { pokemonSearch, setPokemonSearch } = useOutletContext<PokemonContextSearch>()
    const { setRefresh } = useOutletContext<ContextRefresh>()

    useEffect(() => {
        function handleClickOutside(event: PointerEvent) {
            if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
                setIsFilterOpen(false);
            }
        }

        document.addEventListener('pointerdown', handleClickOutside);
        return () => document.removeEventListener('pointerdown', handleClickOutside);
    }, []);
    
    return(
        <>
            <header className="mt-28 w-fit m-auto text-center">
                <h1 className="font-interBlack text-4xl">Pokédex</h1>
                <p>Explore, discover, and learn about Pokémon.</p>

                <div className='flex justify-center items-center gap-4 mt-4'>
                    <div className='bg-[#1F1F1F] h-[2px] w-[28vw] max-w-52'></div>
                    <img src={pokeball} alt="Pokémon" className='w-16'/>
                    <div className='bg-[#1F1F1F] h-[2px] w-[28vw] max-w-52'></div>
                </div>
            </header>

            <div className='flex justify-center items-center gap-1 mt-5 mx-8'>
                <SearchBar searchTerm={pokemonSearch} onSearchChange={setPokemonSearch} setRefresh={setRefresh}/>

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
            </div>

            <section className="min-h-[50vh] max-w-5xl p-2 sm:p-6 mt-12 sm:mx-[4vw] lg:mx-auto sm:rounded-3xl xl:mx-auto shadow-[2px_2px_10px_rgba(0,0,0,0.3)]
                                grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
                {pokemons.length > 0 ? (
                    pokemons.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.id}
                            number={pokemon.dex_entry}
                            name={pokemon.name}
                            image={pokemon.image}
                            type={pokemon.type}
                        />
                    ))
                ) : (
                    <div className="col-span-full flex flex-col items-center justify-center ">
                        <img src={pokeballMissing} alt='pokeball' width={80} />
                        <p className="text-center m-3">
                            No Pokémon found.
                        </p>
                    </div>
                )}
            </section>
        </>
    )
}

export default Pokedex;