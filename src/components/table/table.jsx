import "./table.css"

import ButtonsTable from "./buttonsTable"
import DeckComputer from "./DeckComputer"
import { mazoImg } from "../../JS/Cartas"

function Table({ mazo, setMazo, mazoJugado, setMazoJugado, mazoBot, setMazoBot }) {



    return (

        <div className="table">

            <DeckComputer
                mazoBot={mazoBot} setMazoBot={setMazoBot}
            />

            <div className='mazo-cartas-pozo'>

                <img src={mazoImg} alt='Imagen mazo de cartas' className="" />

                <img src={mazoJugado[mazoJugado.length - 1].img} alt='IMG de la ultima carta que se esta jugando' className='' />

            </div>

            <ButtonsTable />

        </div>
    )
}

export default Table