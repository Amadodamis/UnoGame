
import "./game.css"

import { useState, useEffect } from "react"

import Deck from "./Deck"
import Table from "./table"

import { nuevoMazo as mazoInicial, mazoJugado as mazoJ, mazoPlayer as mazoP, mazoBot as mazoB } from "../../JS/sortMazos"
//import primerCarta from "../../JS/primerCarta"


function Game() {

    //se guarda en un estado el inicio del juego.
    const [inicioDelJuego, setInicioDelJuego] = useState(false)

    //Mazo del juego general.
    const [mazo, setMazo] = useState(mazoInicial)

    //Mazo de cartas que ya se usaron.
    const [mazoJugado, setMazoJugado] = useState(mazoJ)

    const [mazoBot, setMazoBot] = useState(mazoB)

    const [mazoPlayer, setMazoPlayer] = useState(mazoP)


    /*
        useEffect(() => {
            //En el segundo renderizado cambia el estado a empezo el juego
            setInicioDelJuego(true)
        }, [])
    
    
        useEffect(() => {
    
            if (inicioDelJuego !== false) {
                console.log("Inicio el juego")
    
            }
    
        }, [inicioDelJuego])
    
    */
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

/*

 





*/