import { useState, useRef, useEffect } from 'react';

import pokeballMissing from "../../assets/icons/Pokeball-missing.png"
import SearchBar from '../../components/SearchBar';
import PokemonCard from '../../components/PokemonCard';
import PokemonModal from '../../components/CardModal';

import PaginationButtons from '../../components/PaginationButtons';
import { type PokemonData } from '../../types/pokemonType';
import { fetchSelectedPokemon } from '../../service/PokedexService';
import { fetchFavoritePokemonsPayload } from '../../service/FavoritesService';

import { Header } from '../../components/Header';
import FilterButton from '../../components/FilterButton';

function Favorites() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const filterRef = useRef<HTMLDivElement>(null);
  const [pokemons, setPokemons] = useState<PokemonData[]>([])
  const [pokemonType, setPokemonType] = useState("all")
  const [pokemonSearch, setPokemonSearch] = useState("")
  const [refresh, setRefresh] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<PokemonData | null>(null);

  useEffect(() => {
    fetchFavoritePokemonsPayload({pokemonType, pokemonSearch, currentPage, setPokemons, setTotalPages, setCurrentPage})
  }, [pokemonType, pokemonSearch, currentPage, refresh])

    let pages = []
    for (let i = 1; i < totalPages; i++) pages.push(i)

    useEffect(() => {
        function handleClickOutside(event: PointerEvent) {
            if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
                setIsFilterOpen(false);
            }
        }

        document.addEventListener('pointerdown', handleClickOutside);
        return () => document.removeEventListener('pointerdown', handleClickOutside);
    }, []);

    const handleClick = async (pokemon: PokemonData) => { 
        const _id = pokemon._id
        fetchSelectedPokemon({_id, setModalData, setRefresh, setModalOpen}) 
    };

    return(
        <>
            <Header 
                headerTitle="My Favorite Pokemons"
                headerSubtitle="Explore your collections of favorite Pokemons."
            />
            <div className='flex justify-center items-center gap-1 mt-5 mx-8'>
                <SearchBar 
                    searchTerm={pokemonSearch} 
                    onSearchChange={setPokemonSearch} 
                    setRefresh={setRefresh}
                />
                <FilterButton 
                    filterRef={filterRef} 
                    setIsFilterOpen={setIsFilterOpen}
                    isFilterOpen={isFilterOpen}
                    pokemonType={pokemonType}
                    setPokemonType={setPokemonType}
                    setRefresh={setRefresh}
                    setCurrentPage={setCurrentPage}
                />
            </div>

            <section className="min-h-[50vh] max-w-5xl p-2 sm:p-6 mt-12 sm:mx-[4vw] lg:mx-auto sm:rounded-3xl xl:mx-auto shadow-[2px_2px_10px_rgba(0,0,0,0.3)]
                                grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
                {pokemons.length > 0 ? (
                    pokemons.map((pokemon) => (
                        <PokemonCard
                            pokemon={pokemon}
                            onClick={() => handleClick(pokemon)}
                            setRefresh={setRefresh}
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

            {isModalOpen && modalData && (
                <PokemonModal
                    pokemon={modalData}
                    onClose={() => setModalOpen(false)}
                />
            )}

            <PaginationButtons
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>
    )
}

export default Favorites;