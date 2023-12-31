import "./deckPlayer.css"

function DeckPlayer({ mazo, mazoJugado, setMazoJugado, mazoPlayer, setMazoPlayer }) {

    return (
        <div className="deck">
            {
                mazoPlayer.map((carta, i) =>
                    <img src={carta.img} alt='carta-deck' className='cartas-deck-player' key={i} />
                )
            }
        </div>
    )
}

export default DeckPlayer
