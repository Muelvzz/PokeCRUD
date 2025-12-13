import { useState, useEffect } from 'react'
import './css/App.css'

import api from './api'
import LeftTab from './components/LeftTab'
import RightTab from './components/RightTab'

function App() {

  const [refresh, setRefresh] = useState(false)
  const [region, setRegion] = useState("")
  const [allPokemon, setAllPokemon] = useState({ results: [] })

  const regions = ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola", "Galar", "Paldea"]

  async function loadPokemon() {
    try {
      const res = await api.get("/pokemon")
      setAllPokemon(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    loadPokemon()
  }, [refresh])

  return (
    <>

      <nav>

        <div id="left-nav">
          <h2>PokeCRUD</h2>
        </div>
        <div id="right-nav">
            {regions.map((region, key) => (
              <button 
                className='nav-btn' 
                key={key} 
                onClick={() => setRegion(region)}
              >{ region }</button>
            ))}
        </div>

      </nav>

      <main>
            <div id="left-main">
              <LeftTab />
            </div>
            <div id="right-main">
              <RightTab 
                allPokemons={allPokemon}
              />
            </div>
      </main>

    </>
  )
}

export default App
