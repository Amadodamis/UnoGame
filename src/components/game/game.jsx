import "./game.css"
import Deck from "./Deck"
import Table from "./table"


function Game() {
    return (
        <div className="game">
            <Table />
            <Deck />
        </div>
    )
}

export default Game