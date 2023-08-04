import { shuffleArray } from "./shuffleArray"


import cartaInvertidaIMG from "../img/Cartas/cartaInvertida.png"
import mazoImg from "../img/Cartas/mazo.png"

import masCuatroIMG from "../img/Cartas/mascuatro.png"
import eleccionColorIMG from "../img/Cartas/eleccioncolor.png"


//Amarillas
import unoAmarilloIMG from "../img/Cartas/Amarillas/1.png"
import dosAmarilloIMG from "../img/Cartas/Amarillas/2.png"
import tresAmarilloIMG from "../img/Cartas/Amarillas/3.png"
import cuatroAmarilloIMG from "../img/Cartas/Amarillas/4.png"
import cincoAmarilloIMG from "../img/Cartas/Amarillas/5.png"
import seisAmarilloIMG from "../img/Cartas/Amarillas/6.png"
import sieteAmarilloIMG from "../img/Cartas/Amarillas/7.png"
import ochoAmarilloIMG from "../img/Cartas/Amarillas/8.png"
import nueveAmarilloIMG from "../img/Cartas/Amarillas/9.png"
//import cambioDeLadoAmarilloIMG from "../img/Cartas/Amarillas/cambiodelado.png"
import mas2AmarilloIMG from "../img/Cartas/Amarillas/mas2.png"
import saltoDeTurnoAmarilloIMG from "../img/Cartas/Amarillas/saltodeturno.png"

//Azules
import unoAzulIMG from "../img/Cartas/azules/1.png"
import dosAzulIMG from "../img/Cartas/azules/2.png"
import tresAzulIMG from "../img/Cartas/azules/3.png"
import cuatroAzulIMG from "../img/Cartas/azules/4.png"
import cincoAzulIMG from "../img/Cartas/azules/5.png"
import seisAzulIMG from "../img/Cartas/azules/6.png"
import sieteAzulIMG from "../img/Cartas/azules/7.png"
import ochoAzulIMG from "../img/Cartas/azules/8.png"
import nueveAzulIMG from "../img/Cartas/azules/9.png"
//import cambioDeLadoAzulIMG from "../img/Cartas/azules/cambiodelado.png"
import mas2AzulIMG from "../img/Cartas/azules/mas2.png"
import saltoDeTurnoAzulIMG from "../img/Cartas/azules/saltodeturno.png"

//Rojas
import unoRojoIMG from "../img/Cartas/Rojas/1.png"
import dosRojoIMG from "../img/Cartas/Rojas/2.png"
import tresRojoIMG from "../img/Cartas/Rojas/3.png"
import cuatroRojoIMG from "../img/Cartas/Rojas/4.png"
import cincoRojoIMG from "../img/Cartas/Rojas/5.png"
import seisRojoIMG from "../img/Cartas/Rojas/6.png"
import sieteRojoIMG from "../img/Cartas/Rojas/7.png"
import ochoRojoIMG from "../img/Cartas/Rojas/8.png"
import nueveRojoIMG from "../img/Cartas/Rojas/9.png"
//import cambioDeLadoRojoIMG from "../img/Cartas/Rojas/cambiodelado.png"
import mas2RojoIMG from "../img/Cartas/Rojas/mas2.png"
import saltoDeTurnoRojoIMG from "../img/Cartas/Rojas/saltodeturno.png"

//Verdes
import unoVerdeIMG from "../img/Cartas/verdes/1.png"
import dosVerdeIMG from "../img/Cartas/verdes/2.png"
import tresVerdeIMG from "../img/Cartas/verdes/3.png"
import cuatroVerdeIMG from "../img/Cartas/verdes/4.png"
import cincoVerdeIMG from "../img/Cartas/verdes/5.png"
import seisVerdeIMG from "../img/Cartas/verdes/6.png"
import sieteVerdeIMG from "../img/Cartas/verdes/7.png"
import ochoVerdeIMG from "../img/Cartas/verdes/8.png"
import nueveVerdeIMG from "../img/Cartas/verdes/9.png"
//import cambioDeLadoVerdeIMG from "../img/Cartas/verdes/cambiodelado.png"
import mas2VerdeIMG from "../img/Cartas/verdes/mas2.png"
import saltoDeTurnoVerdeIMG from "../img/Cartas/verdes/saltodeturno.png"


/*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *COMPOSICION DEL MAZO  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *

-  (4) -> +4
-  (4) -> Eleccion de color
-  (9) -> Numeros de color
-  (4) -> Cambios a color de un color, 1 de cada color
-  (4) -> +2, 1 de cada color
-  (4) -> Salto de turno, 1 de cada color

modeloCarta =
{
    color:"",
    valor:"",
    img:"",
}


*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * 
*/


let mazo = [

    // +4
    {
        id: 1,
        color: "NEUTRO",
        valor: "+4",
        img: masCuatroIMG,
    },
    {
        id: 2,
        color: "NEUTRO",
        valor: "+4",
        img: masCuatroIMG,
    },
    {
        id: 3,
        color: "NEUTRO",
        valor: "+4",
        img: masCuatroIMG,
    },
    {
        id: 4,
        color: "NEUTRO",
        valor: "+4",
        img: masCuatroIMG,
    },

    //ELECCION COLOR
    {
        id: 5,
        color: "NEUTRO",
        valor: "ELECCION COLOR",
        img: eleccionColorIMG,
    },
    {
        id: 6,
        color: "NEUTRO",
        valor: "ELECCION COLOR",
        img: eleccionColorIMG,
    },
    {
        id: 7,
        color: "NEUTRO",
        valor: "ELECCION COLOR",
        img: eleccionColorIMG,
    },
    {
        id: 8,
        color: "NEUTRO",
        valor: "ELECCION COLOR",
        img: eleccionColorIMG,
    },

    //AMARILLAS
    {
        id: 9,
        color: "AMARILLO",
        valor: "1",
        img: unoAmarilloIMG,
    },
    {
        id: 10,
        color: "AMARILLO",
        valor: "2",
        img: dosAmarilloIMG,
    },
    {
        id: 11,
        color: "AMARILLO",
        valor: "3",
        img: tresAmarilloIMG,
    },
    {
        id: 12,
        color: "AMARILLO",
        valor: "4",
        img: cuatroAmarilloIMG,
    },
    {
        id: 13,
        color: "AMARILLO",
        valor: "5",
        img: cincoAmarilloIMG,
    },
    {
        id: 14,
        color: "AMARILLO",
        valor: "6",
        img: seisAmarilloIMG,
    },
    {
        id: 15,
        color: "AMARILLO",
        valor: "7",
        img: sieteAmarilloIMG,
    },
    {
        id: 16,
        color: "AMARILLO",
        valor: "8",
        img: ochoAmarilloIMG,
    },
    {
        id: 17,
        color: "AMARILLO",
        valor: "9",
        img: nueveAmarilloIMG,
    },
    {
        id: 18,
        color: "AMARILLO",
        valor: "+2",
        img: mas2AmarilloIMG,
    },
    {
        id: 19,
        color: "AMARILLO",
        valor: "SALTO DE TURNO AMARILLO",
        img: saltoDeTurnoAmarilloIMG,
    },

    //****************************AZULES****************************

    {
        id: 20,
        color: "AZUL",
        valor: "1",
        img: unoAzulIMG,
    },
    {
        id: 21,
        color: "AZUL",
        valor: "2",
        img: dosAzulIMG,
    },
    {
        id: 22,
        color: "AZUL",
        valor: "3",
        img: tresAzulIMG,
    },
    {
        id: 23,
        color: "AZUL",
        valor: "4",
        img: cuatroAzulIMG,
    },
    {
        id: 24,
        color: "AZUL",
        valor: "5",
        img: cincoAzulIMG,
    },
    {
        id: 25,
        color: "AZUL",
        valor: "6",
        img: seisAzulIMG,
    },
    {
        id: 26,
        color: "AZUL",
        valor: "7",
        img: sieteAzulIMG,
    },
    {
        id: 27,
        color: "AZUL",
        valor: "8",
        img: ochoAzulIMG,
    },
    {
        id: 28,
        color: "AZUL",
        valor: "9",
        img: nueveAzulIMG,
    },
    {
        id: 29,
        color: "AZUL",
        valor: "+2",
        img: mas2AzulIMG,
    },
    {
        id: 30,
        color: "AZUL",
        valor: "SALTO DE TURNO AZUL",
        img: saltoDeTurnoAzulIMG,
    },

    //****************************VERDES****************************

    {
        id: 31,
        color: "VERDE",
        valor: "1",
        img: unoVerdeIMG,
    },
    {
        id: 32,
        color: "VERDE",
        valor: "2",
        img: dosVerdeIMG,
    },
    {
        id: 33,
        color: "VERDE",
        valor: "3",
        img: tresVerdeIMG,
    },
    {
        id: 34,
        color: "VERDE",
        valor: "4",
        img: cuatroVerdeIMG,
    },
    {
        id: 35,
        color: "VERDE",
        valor: "5",
        img: cincoVerdeIMG,
    },
    {
        id: 36,
        color: "VERDE",
        valor: "6",
        img: seisVerdeIMG,
    },
    {
        id: 37,
        color: "VERDE",
        valor: "7",
        img: sieteVerdeIMG,
    },
    {
        id: 38,
        color: "VERDE",
        valor: "8",
        img: ochoVerdeIMG,
    },
    {
        id: 39,
        color: "VERDE",
        valor: "9",
        img: nueveVerdeIMG,
    },
    {
        id: 40,
        color: "VERDE",
        valor: "+2",
        img: mas2VerdeIMG,
    },
    {
        id: 41,
        color: "VERDE",
        valor: "SALTO DE TURNO VERDE",
        img: saltoDeTurnoVerdeIMG,
    },

    //******************ROJAS****************************

    {
        id: 42,
        color: "ROJO",
        valor: "1",
        img: unoRojoIMG,
    },
    {
        id: 43,
        color: "ROJO",
        valor: "2",
        img: dosRojoIMG,
    },
    {
        id: 44,
        color: "ROJO",
        valor: "3",
        img: tresRojoIMG,
    },
    {
        id: 45,
        color: "ROJO",
        valor: "4",
        img: cuatroRojoIMG,
    },
    {
        id: 46,
        color: "ROJO",
        valor: "5",
        img: cincoRojoIMG,
    },
    {
        id: 47,
        color: "ROJO",
        valor: "6",
        img: seisRojoIMG,
    },
    {
        id: 48,
        color: "ROJO",
        valor: "7",
        img: sieteRojoIMG,
    },
    {
        id: 49,
        color: "ROJO",
        valor: "8",
        img: ochoRojoIMG,
    },
    {
        id: 50,
        color: "ROJO",
        valor: "9",
        img: nueveRojoIMG,
    },
    {
        id: 51,
        color: "ROJO",
        valor: "+2",
        img: mas2RojoIMG,
    },
    {
        id: 52,
        color: "ROJO",
        valor: "SALTO DE TURNO ROJO",
        img: saltoDeTurnoRojoIMG,
    },

]


export { mazo, cartaInvertidaIMG,mazoImg }