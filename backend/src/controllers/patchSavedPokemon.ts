import type { NextFunction, Request, Response } from "express"
import { getDb } from "../database/conn.ts"
import { queryComp } from "../utils/queryComp.ts"
import { handleError } from "../utils/handleError.ts"
import { handleSuccess } from "../utils/handleSuccess.ts"
import { parseQueryParams } from "../utils/parseQueryParams.ts"

export const patchSavedPokemon = async (req: Request, res: Response, next: NextFunction) => {
  const { _id } = parseQueryParams(req)
  const pokemonToUpdate = queryComp({ _id })

  try {

    const db = getDb()
    const collection = (await db).collection("pokemon")

    let pokemonData = await collection.findOne(pokemonToUpdate)
    if (!pokemonData) { return handleError(next, { status: 404, message: "Pokemon Not Found" }) }

    const valueToUpdate = { $set: { isFavorite: !pokemonData.isFavorite } }
    let result = await collection.updateOne(pokemonToUpdate, valueToUpdate)

    if (!result) { return handleError(next, { status: 400, message: "An error updating the Pokemon" }) }

    return handleSuccess(next, { status: 202, message: `[Server] Request Success`, data: result }, res)

  } catch (err) {

    console.error("[Server] Error updating the pokemon value: ", err)
    return handleError(next, { status: 500, message: "Internal Server Error" })

  }
}