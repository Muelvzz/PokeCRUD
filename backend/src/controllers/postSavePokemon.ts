import type { NextFunction, Request, Response } from "express"
import { getDb } from "../database/conn.ts"
import { handleError } from "../utils/handleError.ts"
import { handleSuccess } from "../utils/handleSuccess.ts"
import { parsePayload } from "../utils/parsePayload.ts"

export const postSavePokemon = async (req: Request, res: Response, next: NextFunction) => {
  const payload = req.body

  try {

    const db = getDb()
    const collection = (await db).collection("saved_pokemon")
  
    const newPokemon = parsePayload(payload)
    const result = await collection.insertOne(newPokemon)

    if (!result) { return handleError(next, { status: 400, message: "Invalid Input" }) }

    return handleSuccess(
      next, { 
        status: 202, 
        message: `[Server] Pokemon ${newPokemon.name} is added to the 'saved_pokemon' collection`, data: result 
      }, res)

  } catch (err) {

    console.error("[Server] Internal Server Error: ", err)
    return handleError(next, { status: 500, message: "Internal Server Error." })

  }

}