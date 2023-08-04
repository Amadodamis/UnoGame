import "./table.css"

import { useEffect } from "react"

import ButtonsTable from "./buttonsTable"
import { mazoImg, cartaInvertidaIMG } from "../../JS/Cartas"

function Table({ mazo, setMazo, mazoJugado, setMazoJugado, mazoBot, setMazoBot }) {



    return (

        <div className="table">

            {/*Tablero de la computadora.*/}
            <div className='deck-computer'>

                <img src={cartaInvertidaIMG} alt={''} className='img-size-deck-computer ' />
                <img src={cartaInvertidaIMG} alt={''} className='img-size-deck-computer ' />
                <img src={cartaInvertidaIMG} alt={''} className='img-size-deck-computer ' />
                <img src={cartaInvertidaIMG} alt={''} className='img-size-deck-computer ' />
                <img src={cartaInvertidaIMG} alt={''} className='img-size-deck-computer ' />
                <img src={cartaInvertidaIMG} alt={''} className='img-size-deck-computer ' />

            </div>

            <div className='mazo-cartas-pozo'>

                <img src={mazoImg} alt={''} className={""} />

                {/*Carta aleatoria es la primer carta del juego, o la primer carta por donde sobre se comienza a jugar.*/}
                <img src={mazoJugado[mazoJugado.length - 1].img} alt={''} className={''} />

            </div>

            <ButtonsTable />

        </div>
    )
}

export default Table