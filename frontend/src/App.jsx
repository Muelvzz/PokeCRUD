import { useState } from 'react'
import './css/App.css'

function App() {

  const [region, setRegion] = useState("")
  const [selectPokemon, setSelectPokemon] = useState({})

  const regions = ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola", "Galar", "Paldea"]

  console.log(region)

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
            <div id="left-main"></div>
            <div id="right-main"></div>
      </main>

    </>
  )
}

export default App
