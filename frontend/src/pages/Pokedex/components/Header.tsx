import pokeball from "../../../assets/icons/Pokeball.png"

export function PokedexHeader() {
  return (
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
    </>
  )
}