import { MongoClient, Db } from "mongodb"
import { ATLAS_URI } from "../core/loadEnvironment.ts"

export let client: MongoClient | null = null
let dbInstance: Db | null = null

export async function getDb() {
  if (!dbInstance) {
    const uri = ATLAS_URI

    if (!uri) {
      throw new Error("[Server] ATLAS_URI is not defined in environment variables.")
    }

    client = new MongoClient(uri)
    await client.connect()
    dbInstance = client.db("pokemon")

    console.log("[Server] Successfully connected to MongoDB")
  }
  
  return dbInstance
}

getDb().catch((err) => console.error("[Server] Database connection failed:", err))