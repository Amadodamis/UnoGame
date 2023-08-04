
import "./game.css"

import { useState } from "react"

import Deck from "../deckPlayer/Deck"
import Table from "../table/table"

import {
    nuevoMazo as mazoInicial,
    mazoJugado as mazoJ,
    mazoPlayer as mazoP,
    mazoBot as mazoB
} from "../../JS/sortMazos"



function Game() {


    //Mazo del juego general.
    const [mazo, setMazo] = useState(mazoInicial)

    //Mazo de cartas que ya se usaron.
    const [mazoJugado, setMazoJugado] = useState(mazoJ)

    const [mazoBot, setMazoBot] = useState(mazoB)

    const [mazoPlayer, setMazoPlayer] = useState(mazoP)



    return (

        <div className="game">
            <Table
                mazo={mazo} setMazo={setMazo}

                mazoJugado={mazoJugado} setMazoJugado={setMazoJugado}

                mazoBot={mazoBot} setMazoBot={setMazoBot}
            />


            <Deck
                mazo={mazo}

                mazoJugado={mazoJugado} setMazoJugado={setMazoJugado}

                mazoPlayer={mazoPlayer} setMazoPlayer={setMazoPlayer}
            />
        </div>



    )
}

export default Game