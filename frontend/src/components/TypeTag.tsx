import { typeData, type TypeTagProps } from '../types/pokemonType';

function TypeTag({ type }: TypeTagProps) {
    const typeInfo = typeData.find((item) => item.type.toLowerCase() === type.toLowerCase());

    if (!typeInfo) return null;

    return(
        <div className="w-fit mt-1 py-1 px-2 rounded-md flex items-center gap-1" style={{ backgroundColor: typeInfo.color }}>
            <img src={typeInfo.icon} alt={`${typeInfo.type} type icon`} className="w-[3vw] sm:w-3"/>
            <p className="text-[clamp(0px,3vw,12px)] sm:text-xs font-interBlack text-white">{typeInfo.type}</p>
        </div>
    )
}

export default TypeTag;