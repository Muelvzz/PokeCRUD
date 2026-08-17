import { useEffect, useState } from "react";
import { api } from "./service/api.ts";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { PokemonContext } from "./context/apiContext.tsx";
import type { PokemonData } from "./types/pokemonType.ts";
import Footer from "./components/Footer.tsx";

export default function App() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([])
  const [pokemonType, setPokemonType] = useState("all")
  const [pokemonSearch, setPokemonSearch] = useState("")
  const [refresh, setRefresh] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const fetchPayload = async () => {
      try {
        let apiQuery = ""
        const queryParams: string[] = []

        if (pokemonType !== "all") queryParams.push(`type=${pokemonType}`)
        if (pokemonSearch) queryParams.push(`search=${pokemonSearch}`)
        if (currentPage > 0) queryParams.push(`offset=${(currentPage - 1) * 12}`)

        if (queryParams.length > 0) apiQuery = `?${queryParams.join("&")}`

        const res = await api.get(apiQuery)
        setPokemons(res.data.data)

        const computedPages = Math.max(1, Math.ceil(res.data.totalItems / 12))
        setTotalPages(computedPages)

        if (currentPage > computedPages) {
          setCurrentPage(1)
        }
      } catch (err) {
        console.error(err)
      }
    }

  fetchPayload()
}, [pokemonType, pokemonSearch, currentPage, refresh])

  // console.log(`[Client]: ${apiQuery}`)
  // console.log(`[Client] Pokemon Size: ${pokemons.length}`)

  return (
    <>
      <PokemonContext.Provider value={ pokemons }>
        <Navbar />
          <main>
            <Outlet
              context={{
                pokemonType,
                setPokemonType,
                pokemonSearch,
                setPokemonSearch,
                setRefresh,
                totalPages,
                currentPage,
                setCurrentPage,
              }}
            />
          </main>
        <Footer />
      </PokemonContext.Provider>
    </>
  )
}
