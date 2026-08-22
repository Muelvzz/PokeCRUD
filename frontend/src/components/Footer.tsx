function Footer() {
  return (
    <>
      <footer className="bg-neutral-900 pt-10 pb-6 mt-28 text-center">
        <h1 className="font-interBlack text-4xl font-bold text-white sm:text-3xl">
          PokeCRUD
        </h1>

        <p className="font-interRegular mx-8 mt-3 max-w-xl text-sm text-neutral-400 sm:mx-auto sm:text-base">
          PokeCRUD is your interactive Pokédex for exploring Pokémon,
          discovering their stats and abilities, and building your own
          collection.
        </p>

        <div className="h-[1px] max-w-5xl mx-[12vw] lg:mx-auto mt-8 bg-neutral-700"></div>

        <p className="mt-6 text-xs text-neutral-500 sm:text-sm">
          © 2026 PokeCRUD. All rights reserved.
        </p>
      </footer>
    </>
  )
}

export default Footer