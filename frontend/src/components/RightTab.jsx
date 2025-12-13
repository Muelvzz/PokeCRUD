import "../css/righttab.css"

export default function RightTab({ allPokemons }) {
    return (
        <>
            {allPokemons.results.map((pokemon, index) => (
                <button className="poke-tab-btn" key={index}>
                    <div className="pokemon-data-container">
                        <h2 className="pokemon-dex">{ index + 1 }</h2>
                        <h3 className="pokemon-name">{ pokemon.name }</h3>
                    </div>
                    <div className="pokeball-img-container">
                        <img src="/pokeball.png" alt="pokeball.png" className="pokeball-img" />
                    </div>
                </button>
            ))}
        </>
    )
}