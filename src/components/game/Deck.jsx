import "./deck.css"
import mascuatro from "../../img/Cartas/mascuatro.png"
import unoAmarillo from "../../img/Cartas/Amarillas/1.png"
import dosAzul from "../../img/Cartas/Azules/2.png"
import tresVerde from "../../img/Cartas/verdes/3.png"
import dosRojo from "../../img/Cartas/rojas/2.png"
import cambiodelado from "../../img/Cartas/rojas/cambiodelado.png"
import elecColor from "../../img/Cartas/eleccioncolor.png"
function Deck() {
    return (
        <div className="deck">
            <img src={mascuatro} alt='carta-deck' className={''} />
            <img src={unoAmarillo} alt='carta-deck' className={''} />
            <img src={dosAzul} alt='carta-deck' className={''} />
            <img src={elecColor} alt='carta-deck' className={''} />
            <img src={tresVerde} alt='carta-deck' className={''} />
            <img src={dosRojo} alt='carta-deck' className={''} />
            <img src={cambiodelado} alt='carta-deck' className={''} />
        </div>
    )
}

export default Deck