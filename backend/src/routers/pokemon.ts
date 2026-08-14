import express from "express"
import { getAllPokemon } from "../controllers/getAllPokemon.ts"
import { getPokemon } from "../controllers/getPokemon.ts"
import { getAllSavedPokemon } from "../controllers/getAllSavedPokemon.ts"
import { getSavedPokemon } from "../controllers/getSavedPokemon.ts"
import { postSavePokemon } from "../controllers/postSavePokemon.ts"
import { patchSavedPokemon } from "../controllers/patchSavedPokemon.ts"
import { delSavedPokemon } from "../controllers/delSavedPokemon.ts"

export const pokemonRouter = express.Router()

pokemonRouter.get("/", getAllPokemon)
pokemonRouter.get("/saved-pokemon", getAllSavedPokemon)
pokemonRouter.get("/saved-pokemon/:_id", getSavedPokemon)
pokemonRouter.get("/:_id", getPokemon)

pokemonRouter.post("/saved-pokemon", postSavePokemon)

pokemonRouter.patch("/saved-pokemon", patchSavedPokemon)

pokemonRouter.delete("/saved-pokemon/:_id", delSavedPokemon)