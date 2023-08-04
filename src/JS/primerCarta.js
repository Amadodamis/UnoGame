function primerCarta(mazo, mazoJugado, setMazoJugado) {
    let carta = mazo.pop()

    setMazoJugado(mazoJugado => [...mazoJugado, carta])

    console.log(mazoJugado)
}

export default primerCarta