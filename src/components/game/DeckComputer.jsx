import React from 'react'
import { cartaInvertidaIMG } from "../../JS/Cartas"

function DeckComputer({ mazoBot, setMazoBot }) {

    return (

        <div className='deck-computer'>
            {
                mazoBot.map((carta, i) =>
                    <img src={carta.img} alt={'cartaInvertidaIMG'} className='img-size-deck-computer ' key={i} />
                )
            }

        </div>
    )
}

export default DeckComputer