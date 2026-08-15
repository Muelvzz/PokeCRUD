import path from "path"
import { fileURLToPath } from "url"
import dotenv from "dotenv"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const envPath = path.resolve(__dirname, "../..", ".env")

dotenv.config({ path: envPath })

export const ATLAS_URI = process.env.ATLAS_URI
export const PORT = process.env.PORT
export const VERCEL_FRONTEND_URL = process.env.VERCEL_FRONTEND_URL
