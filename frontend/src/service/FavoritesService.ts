import { api } from "./api"
import type { FetchPokemonPayloadTypes } from "../types/PokedexTypes"

export const fetchFavoritePokemonsPayload = async ({pokemonType, pokemonSearch, currentPage, setPokemons, setTotalPages, setCurrentPage}: FetchPokemonPayloadTypes) => {
  try {
    let apiQuery = "/saved-pokemon"
    const queryParams: string[] = []

    if (pokemonType !== "all") queryParams.push(`type=${pokemonType}`)
    if (pokemonSearch) queryParams.push(`search=${pokemonSearch}`)
    if (currentPage > 0) queryParams.push(`offset=${(currentPage - 1) * 12}`)

    if (queryParams.length > 0) apiQuery = `/saved-pokemon?${queryParams.join("&")}`

    const res = await api.get(apiQuery)
    setPokemons(res.data.data)
    console.log(res.data.data)

    const computedPages = Math.max(1, Math.ceil(res.data.totalItems / 12))
    setTotalPages(computedPages)

    if (currentPage > computedPages) {
      setCurrentPage(1)
    }
  } catch (err) {
    console.error(err)
  }
}