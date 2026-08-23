import { api } from "./api"
import type { FetchPokemonPayloadTypes, FetchSelectedPokemonTypes } from "../types/PokedexTypes"

export const fetchPokemonPayload = async ({pokemonType, pokemonSearch, currentPage, setPokemons, setTotalPages, setCurrentPage}: FetchPokemonPayloadTypes) => {
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

export const fetchSelectedPokemon = async ({_id, setModalData, setRefresh, setModalOpen}: FetchSelectedPokemonTypes) => {
  try {
      let apiQuery = `/${_id}`
      const result = await api.get(apiQuery)
      console.log(result.data.data)
      setModalData(result.data.data)
  } catch (err) {
      console.log(err)
  } finally {
      setRefresh(prev => !prev)
  }
  setModalOpen(true);
}