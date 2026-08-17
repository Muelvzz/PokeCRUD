import type { NextFunction, Request, Response } from "express"
import { getDb } from "../database/conn.ts"
import { parseQueryParams } from "../utils/parseQueryParams.ts"
import { queryComp } from "../utils/queryComp.ts"
import { handleError } from "../utils/handleError.ts"
import { handleSuccess } from "../utils/handleSuccess.ts"
import { parseAllResults } from "../utils/parseResult.ts"

export const getAllPokemon = async (req: Request, res: Response, next: NextFunction) => {
  const { offset, search, type } = parseQueryParams(req)
  let query = queryComp({ search, type })

  try {

    const db = getDb()
    let collection = (await db).collection("pokemon")
    let results = await collection
      .find(query, {
        projection: {
          id: 1,
          dex_entry: 1,
          name: 1,
          image: 1,
          type: 1,
          gen: 1,
        }
      })
      .collation({ 
        locale: "en", 
        strength: 2 
      })
      .sort({ 
        dex_entry: 1 
      })
      .skip(offset)
      .limit(12)
      .toArray()

    let totalItems = await collection.countDocuments(query, {
      collation: { 
        locale: "en", 
        strength: 2 
      }
    })

    if (results.length === 0) { return handleError(next, { status: 404, message: "Pokemon Not Found." }) }

    const parseResult = parseAllResults(results)
    
    return handleSuccess(next, { status: 200, message: "Query Success", data: parseResult, totalItems: totalItems }, res)

  } catch (err) {

    console.error("[Server] Error fetching pokemons: ", err)
    return handleError(next, { status: 500, message: "Internal Server Error" })

  }
}