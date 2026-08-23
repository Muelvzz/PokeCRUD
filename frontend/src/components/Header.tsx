import pokeball from "../assets/icons/Pokeball.png"

interface HeaderTypes {
  headerTitle: string
  headerSubtitle: string
}

export function Header({ headerTitle, headerSubtitle }: HeaderTypes) {
  return (
    <>
      <header className="mt-28 w-fit m-auto text-center">
          <h1 className="font-interBlack text-4xl">{ headerTitle }</h1>
          <p>{ headerSubtitle }</p>

          <div className='flex justify-center items-center gap-4 mt-4'>
              <div className='bg-[#1F1F1F] h-[2px] w-[28vw] max-w-52'></div>
              <img src={pokeball} alt="Pokémon" className='w-16'/>
              <div className='bg-[#1F1F1F] h-[2px] w-[28vw] max-w-52'></div>
          </div>
      </header>
    </>
  )
}