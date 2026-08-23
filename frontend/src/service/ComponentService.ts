import type { PatchPokemonFavoriteType } from "../types/ComponentTypes"
import { api } from "./api"

export const PatchPokemonFavorite = async ({_id, setRefresh}: PatchPokemonFavoriteType) => {
  try {
      let apiQuery = `/saved-pokemon?_id=${_id}`
      await api.patch(apiQuery)
  } catch (err) {
      console.log(err)
  } finally {
      setRefresh(prev => !prev)
  }
}