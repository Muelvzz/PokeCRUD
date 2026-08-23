function Footer() {
  return (
    <>
      <footer className="relative bg-neutral-900 pt-10 pb-8 px-2 sm:px-6 mt-28">

        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-white sm:text-3xl">
            PokeCRUD
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-neutral-400 sm:text-base">
            PokeCRUD is your interactive Pokédex for exploring Pokémon,
            discovering their stats and abilities, and building your own
            collection.
          </p>

          <hr className="mx-auto mt-6 border-t border-neutral-700" />

          <p className="mt-6 text-xs text-neutral-500 sm:text-sm">
            © 2026 PokeCRUD. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer