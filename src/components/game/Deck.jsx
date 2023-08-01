import "./deck.css"
import { mazo } from "../../JS/Cartas"


function Deck() {

    return (
        <div className="deck">
            <img src={mazo[0].img} alt='carta-deck' className={''} />
            <img src={mazo[1].img} alt='carta-deck' className={''} />
            <img src={mazo[2].img} alt='carta-deck' className={''} />
            <img src={mazo[3].img} alt='carta-deck' className={''} />
            <img src={mazo[4].img} alt='carta-deck' className={''} />
            <img src={mazo[5].img} alt='carta-deck' className={''} />
            <img src={mazo[6].img} alt='carta-deck' className={''} />
            <img src={mazo[7].img} alt='carta-deck' className={''} />
            <img src={mazo[8].img} alt='carta-deck' className={''} />
            <img src={mazo[9].img} alt='carta-deck' className={''} />
            <img src={mazo[10].img} alt='carta-deck' className={''} />

        </div>
    )
}

export default Deck