
import "./game.css"

import { useState, useEffect } from "react"

import Deck from "./Deck"
import Table from "./table"

import { mazo as mazoInicial } from "../../JS/Cartas"

function Game() {

    //se guarda en un estado el inicio del juego.
    const [inicio, setInicio] = useState(false)

    //Mazo del juego general.
    const [mazo, setMazo] = useState(mazoInicial)

    //Mazo de cartas que ya se usaron.
    const [mazoJugado, setMazoJugado] = useState([])

    const [mazoBot, setMazoBot] = useState([])

    const [mazoPlayer, setMazoPlayer] = useState([])



    useEffect(() => {
        if (inicio === false) {
            setInicio(true)
            //poner una carta en mazo jugado
            //descontarla del mazo
            //repartir 7 cartas al jugado
            //descontarlas del mazo
            //repartir 7 cartas al jugador
            //descontarlas del mazo
        }
    }, [])


    return (

        <div className="game">

            <Table
                mazo={mazo}

                mazoJugado={mazoJugado} setMazoJugado={setMazoJugado}
                
                mazoBot={mazoBot} setMazoBot={setMazoBot}
            />

            {/* Mesa del jugador. */}
            <Deck
                mazo={mazo}

                mazoJugado={mazoJugado} setMazoJugado={setMazoJugado}

                mazoPlayer={mazoPlayer} setMazoPlayer={setMazoPlayer}
            />
        </div>



    )
}

export default Game