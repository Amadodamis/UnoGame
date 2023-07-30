import "./table.css"
import mazo from "../../img/Cartas/mazo.png"
import cartainvertida from "../../img/Cartas/cartainvertida.png"
import mascuatro from "../../img/Cartas/mascuatro.png"

function Table() {
    return (
        <div className="table">
            <div className='deck-computer'>
                <img src={cartainvertida} alt={''} className='img-size-deck-computer ' />
                <img src={cartainvertida} alt={''} className='img-size-deck-computer ' />
                <img src={cartainvertida} alt={''} className='img-size-deck-computer ' />
                <img src={cartainvertida} alt={''} className='img-size-deck-computer ' />
                <img src={cartainvertida} alt={''} className='img-size-deck-computer ' />
                <img src={cartainvertida} alt={''} className='img-size-deck-computer ' />
           
            </div>

            <div className='mazo-cartas-pozo'>
                <img src={mazo} alt={''} className={""} />

                <img src={mascuatro} alt={''} className={''} />
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