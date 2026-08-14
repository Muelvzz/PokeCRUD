import express from "express"
import { PORT } from "./core/loadEnvironment.ts"
import { pokemonRouter } from "./routers/pokemon.ts"
import { errorHandler } from "./middleware/errorHandler.ts"
import { client } from "./database/conn.ts"
import cors from "cors"

const app = express()

app.use(express.json()) // Parse JSON payloads
app.use(express.urlencoded({  extended: true })) // Parse URL-encoded HTML forms
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://172.26.176.1:5173",
    "http://192.168.100.29:5173",
  ],
  credentials: true,
}))

app.use("/api/pokemon", pokemonRouter)

app.use(errorHandler) // handling Error Response

app.listen(PORT, () => {
  console.log(`[Server] Backend is running at http://localhost:${PORT}`)
})

process.on("SIGINT", async () => {
  console.log(`[Server] Closing MongoDB Connection...`)
  await client?.close()
  process.exit(0)
})