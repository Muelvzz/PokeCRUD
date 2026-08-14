import type { NextFunction, Request, Response } from "express"
import { getDb } from "../database/conn.ts"
import { parseQueryParams } from "../utils/parseQueryParams.ts"
import { queryComp } from "../utils/queryComp.ts"
import { handleError } from "../utils/handleError.ts"
import { parseAllResults } from "../utils/parseResult.ts"
import { handleSuccess } from "../utils/handleSuccess.ts"

export const getAllSavedPokemon = async (req: Request, res: Response, next: NextFunction) => {

  const { offset, search, type } = parseQueryParams(req)
  let query = queryComp({ search, type })

  try {

    const db = getDb()
    const collection = (await db).collection("saved_pokemon")
    let results = await collection.find(query).skip(offset).limit(10).toArray()
    
    if (results.length === 0) { return handleError(next, { status: 404, message: "Pokemon Not Found." }) }

    const parseResult = parseAllResults(results)
    return handleSuccess(next, { status: 200, message: "Query Success", data: parseResult }, res)

  } catch (err) {

    console.log(`[Server] Error occured in the Saved Pokemon: ${err}`)
    return handleError(next, { status: 500, message: "Internal Server Error" })

  }

}