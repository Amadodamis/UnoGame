import "./deck.css"
import mascuatro from "../../img/Cartas/mascuatro.png"

function Deck() {
    return (
        <div className="deck">
            <img src={mascuatro} alt='carta-deck' className={''} />
            <img src={mascuatro} alt='carta-deck' className={''} />
            <img src={mascuatro} alt='carta-deck' className={''} />
            <img src={mascuatro} alt='carta-deck' className={''} />
            <img src={mascuatro} alt='carta-deck' className={''} />
            <img src={mascuatro} alt='carta-deck' className={''} />
            <img src={mascuatro} alt='carta-deck' className={''} />
        </div>
    )
}

export default Deck