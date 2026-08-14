import { useEffect, useState } from "react";
import { api } from "./service/api.ts";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { PokemonContext } from "./context/apiContext.tsx";

export default function App() {
  const [pokemons, setPokemons] = useState([])
  const [pokemonType, setPokemonType] = useState("all")
  const [pokemonSearch, setPokemonSearch] = useState("")
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    const fetchPayload = async (type: string) => {
      try {

        let apiQuery: string = ""
        let queryParams: string[] = []

        if (type !== "all") { queryParams.push(`type=${pokemonType}`) }
        if (pokemonSearch) { queryParams.push(`search=${pokemonSearch}`) }
        if (queryParams.length > 0) { apiQuery += `?${queryParams.join("&")}` }
        
        const res = await api.get(apiQuery)
        setPokemons(res.data.data)

        console.log(`[Client] Query: ${apiQuery}`)
      } catch (err) {
        console.error(err)
      }
    }

    fetchPayload(pokemonType)
  }, [refresh])

  return (
    <>
      <PokemonContext.Provider value={ pokemons }>
        <Navbar />
          <main>
            <Outlet context={{ 
              pokemonType, 
              setPokemonType,
              pokemonSearch,
              setPokemonSearch, 
              setRefresh,
            }}/>
          </main>
      </PokemonContext.Provider>
    </>
  )
}
