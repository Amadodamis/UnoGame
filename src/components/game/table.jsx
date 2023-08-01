import "./table.css"
import ButtonsTable from "./buttonsTable"
import { mazoImg, cartaInvertidaIMG, cartaAleatoria } from "../../JS/Cartas"

function Table() {


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
                <img src={cartaAleatoria.img} alt={''} className={''} />

            </div>

            <ButtonsTable />

        </div>
    )
}

export default Table