import type { NextFunction, Request, Response } from "express"
import { getDb } from "../database/conn.ts"
import { parsePathParams } from "../utils/parsePathParams.ts"
import { queryComp } from "../utils/queryComp.ts"
import { handleError } from "../utils/handleError.ts"
import { handleSuccess } from "../utils/handleSuccess.ts"

export const delSavedPokemon = async (req: Request, res: Response, next: NextFunction) => {
  const { _id } = parsePathParams(req)
  const pokemonToDelete = queryComp({ _id })

  try {

    const db = getDb()
    const collection = (await db).collection("saved_pokemon")
    const result = await collection.deleteOne(pokemonToDelete)

    if (!result) { return handleError(next, { status: 400, message: "An error deleting the Pokemon" }) }

    return handleSuccess(next, { status: 202, message: "Successfully Deleted.", data: [] }, res)
    
  } catch (err) {

    console.error("[Server] Error deleting the pokemon: ", err)
    return handleError(next, { status: 500, message: "Internal Server Error" })
  }
} 