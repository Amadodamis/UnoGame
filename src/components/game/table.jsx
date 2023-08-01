import "./table.css"
/*import mazoIMG from "../../img/Cartas/mazo.png"
import cartainvertida from "../../img/Cartas/cartainvertida.png"
import mascuatro from "../../img/Cartas/mascuatro.png"
*/
import { mazoImg,cartaInvertidaIMG,cartaAleatoria } from "../../JS/Cartas"

function Table() {


    return (
        <div className="table">
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

                <img src={cartaAleatoria.img} alt={''} className={''} />
            </div>

            <div className='buttons-table'>
                <button className='button-table'>TOMAR CARTA</button>
                <button className='button-table'>NO CANTASTE UNO!</button>
                <button className='button-table'>UNO!</button>
            </div>
        </div>
    )
}

export default Table