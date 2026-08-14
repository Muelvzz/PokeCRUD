import type { NextFunction, Request, Response } from "express"
import { getDb } from "../database/conn.ts"
import { parsePathParams } from "../utils/parsePathParams.ts"
import { queryComp } from "../utils/queryComp.ts"
import { handleError } from "../utils/handleError.ts"
import { parseResult } from "../utils/parseResult.ts"
import { handleSuccess } from "../utils/handleSuccess.ts"

export const getSavedPokemon = async (req: Request, res: Response, next: NextFunction) => {
  const { _id } = parsePathParams(req)
  let query = queryComp({ _id })

  try {

    const db = getDb()
    const collection = (await db).collection("saved_pokemon")
    let result = await collection.findOne(query)

    if (!result) { return handleError(next, { status: 404, message: "Pokemon Not Found." }) }

    const parsedResult = parseResult(result)

    return handleSuccess(next, { status: 200, message: "Query Success", data: parsedResult }, res)

  } catch (err) {

    console.error(`Error fetching data of Pokemon: ${err}`)
    return handleError(next, { status: 500, message: "Internal Server Error" })

  }

}