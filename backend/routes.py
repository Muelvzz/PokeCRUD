from fastapi import HTTPException, APIRouter
import httpx

URL = "https://pokeapi.co/api/v2/pokemon"

router = APIRouter(
    prefix="/pokemon",
    tags=["News"]
)

@router.get("/")
async def get_pokemon():
    async with httpx.AsyncClient() as client:
        response = await client.get(URL)

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail="Failed to load Pokemons")

    return response.json()