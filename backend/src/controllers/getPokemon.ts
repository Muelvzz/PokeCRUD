import type { Response, Request, NextFunction } from "express"
import { getDb } from "../database/conn.ts"
import { parsePathParams } from "../utils/parsePathParams.ts"
import { queryComp } from "../utils/queryComp.ts"
import { handleError } from "../utils/handleError.ts"
import { handleSuccess } from "../utils/handleSuccess.ts"
import { parseResult } from "../utils/parseResult.ts"

export const getPokemon = async (req: Request, res: Response, next: NextFunction) => {
  const { _id } = parsePathParams(req)
  let query = queryComp({ _id })

  try {

    const db = getDb()
    let collection = (await db).collection("pokemon")
    let result = await collection.findOne(query)

    if (!result) { return handleError(next, { status: 404, message: "Pokemon Not Found." }) }

    const parsedResult = parseResult(result)

    return handleSuccess(next, { status: 200, message: "Query Success", data: parsedResult }, res)

  } catch (err) {

    console.error("[Server] Error fetching pokemons: ", err)
    return handleError(next, { status: 500, message: "Internal Server Error" })
  }
}