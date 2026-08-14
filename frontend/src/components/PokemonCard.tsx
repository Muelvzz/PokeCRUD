import bookmarkIcon from '../assets/icons/bookmark-icon.svg';
// import bookmarkSolid from '../assets/icons/bookmark-solid.svg';

import TypeTag from './TypeTag';
import { typeData, type PokemonCardProps } from '../types/pokemonType';

function PokemonCard({number, name, image, type}: PokemonCardProps) {
    const typeInfo = typeData.find(
        (item) => item.type.toLowerCase() === type[0]?.toLowerCase()
    );

    return(
        <div className="h-fit p-2 sm:p-3 border-2 rounded-xl border-[#1F1F1F]/30 w-full">
            <div className='rounded-lg' style={{backgroundColor: typeInfo?.color ?? "#858A9499"}}>
                <img src={image} alt={name} className="w-full" />
            </div>
            
            <div className="mt-2">
                <p className="text-xs font-interRegular">#{String(number).padStart(4, '0')}</p>
                <h1 className="text-lg sm:text-2xl m-0 font-interBlack">{name}</h1>
                
                <div className="flex justify-between items-end flex-wrap gap-1">
                    <div className="flex gap-1">
                        <div className="flex gap-1">
                            {type.map((typeName) => (
                                <TypeTag
                                    key={typeName}
                                    type={typeName}
                                />
                            ))}
                        </div>
                    </div>
                    <button>
                        <img src={bookmarkIcon} alt="Bookmark" className="w-6"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;