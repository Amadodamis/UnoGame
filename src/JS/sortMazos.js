import { mazo } from "./Cartas";

import { shuffleArray } from "./shuffleArray";


let nuevoMazo = shuffleArray(mazo)

let mazoJugado = [nuevoMazo.pop()]


let mazoPlayer = [
    nuevoMazo.pop(),
    nuevoMazo.pop(),
    nuevoMazo.pop(),
    nuevoMazo.pop(),
    nuevoMazo.pop(),
    nuevoMazo.pop(),
    nuevoMazo.pop()
]


let mazoBot = [
    nuevoMazo.pop(),
    nuevoMazo.pop(),
    nuevoMazo.pop(),
    nuevoMazo.pop(),
    nuevoMazo.pop(),
    nuevoMazo.pop(),
    nuevoMazo.pop()
]

export { nuevoMazo, mazoJugado, mazoPlayer, mazoBot }