import { useState } from 'react';
import pokeball from '../assets/icons/Pokeball.png'
import bookmarkIcon from '../assets/icons/bookmark-icon.svg';
import bookmarkSolid from '../assets/icons/bookmark-solid.svg';

import TypeTag from './TypeTag';
import { typeData, type ShowPokemonData } from '../types/pokemonType';

// seperate file
interface PokemonCardProps {
    pokemon: ShowPokemonData;
    onClick: () => void;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

import { api } from '../service/api';

function PokemonCard({ pokemon, onClick, setRefresh }: PokemonCardProps) {
    const typeInfo = typeData.find(
        (item) => item.type.toLowerCase() === pokemon.type[0]?.toLowerCase()
    );

    // seperate file
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const handleClick = async (_id: string) => {
        try {
            let apiQuery = `/saved-pokemon?_id=${_id}`
            await api.patch(apiQuery)
        } catch (err) {
            console.log(err)
        } finally {
            setRefresh(prev => !prev)
        }
    }

    return(
        <div onClick={onClick} className="h-fit p-2 sm:p-3 border-2 rounded-xl border-[#1F1F1F]/30 w-full">
            <div className='rounded-lg w-full aspect-square flex items-center justify-center' style={{ backgroundColor: `${typeInfo?.color ?? '#858A94'}99` }}>
                {!isImageLoaded && (
                    <img
                        src={pokeball}
                        alt="Loading Pokémon"
                        className="w-1/2 opacity-50 animate-spin"
                    />
                )}

                <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    onLoad={() => setIsImageLoaded(true)}
                    className={`w-full transition-opacity duration-300 ${
                        isImageLoaded ? 'opacity-100' : 'opacity-0 absolute'
                    }`}
                />
            </div>
            
            <div className="mt-2">
                <p className="text-xs font-interRegular">#{String(pokemon.dex_entry).padStart(4, '0')}</p>
                <h1 className="text-lg sm:text-2xl m-0 font-interBlack">{pokemon.name}</h1>
                
                <div className="flex justify-between items-end flex-wrap gap-1">
                    <div className="flex gap-1">
                        <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
                            {pokemon.type.map((typeName) => (
                                <TypeTag
                                    key={typeName}
                                    type={typeName}
                                />
                            ))}
                        </div>
                    </div>
                    <button onClick={(e) => {handleClick(pokemon._id), e.stopPropagation()}}>
                        <img src={pokemon.isFavorite ? bookmarkSolid : bookmarkIcon} alt="Bookmark" className="w-6"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;