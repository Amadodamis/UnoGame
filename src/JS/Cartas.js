import cartaInvertidaIMG from "../img/Cartas/cartaInvertida.png"
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
        color: "NEUTRO",
        valor: "+4",
        img: masCuatroIMG,
    },
    {
        color: "NEUTRO",
        valor: "+4",
        img: masCuatroIMG,
    },
    {
        color: "NEUTRO",
        valor: "+4",
        img: masCuatroIMG,
    },
    {
        color: "NEUTRO",
        valor: "+4",
        img: masCuatroIMG,
    },

    //ELECCION COLOR
    {
        color: "NEUTRO",
        valor: "ELECCION COLOR",
        img: eleccionColorIMG,
    },
    {
        color: "NEUTRO",
        valor: "ELECCION COLOR",
        img: eleccionColorIMG,
    },
    {
        color: "NEUTRO",
        valor: "ELECCION COLOR",
        img: eleccionColorIMG,
    },
    {
        color: "NEUTRO",
        valor: "ELECCION COLOR",
        img: eleccionColorIMG,
    },

    //AMARILLAS
    {
        color: "AMARILLO",
        valor: "1",
        img: unoAmarilloIMG,
    },
    {
        color: "AMARILLO",
        valor: "2",
        img: dosAmarilloIMG,
    },
    {
        color: "AMARILLO",
        valor: "3",
        img: tresAmarilloIMG,
    },
    {
        color: "AMARILLO",
        valor: "4",
        img: cuatroAmarilloIMG,
    },
    {
        color: "AMARILLO",
        valor: "5",
        img: cincoAmarilloIMG,
    },
    {
        color: "AMARILLO",
        valor: "6",
        img: seisAmarilloIMG,
    },
    {
        color: "AMARILLO",
        valor: "7",
        img: sieteAmarilloIMG,
    },
    {
        color: "AMARILLO",
        valor: "8",
        img: ochoAmarilloIMG,
    },
    {
        color: "AMARILLO",
        valor: "9",
        img: nueveAmarilloIMG,
    },
    {
        color: "AMARILLO",
        valor: "+2",
        img: mas2AmarilloIMG,
    },
    {
        color: "AMARILLO",
        valor: "SALTO DE TURNO AMARILLO",
        img: saltoDeTurnoAmarilloIMG,
    },

    //****************************AZULES****************************

    {
        color: "AZUL",
        valor: "1",
        img: unoAzulIMG,
    },
    {
        color: "AZUL",
        valor: "2",
        img: dosAzulIMG,
    },
    {
        color: "AZUL",
        valor: "3",
        img: tresAzulIMG,
    },
    {
        color: "AZUL",
        valor: "4",
        img: cuatroAzulIMG,
    },
    {
        color: "AZUL",
        valor: "5",
        img: cincoAzulIMG,
    },
    {
        color: "AZUL",
        valor: "6",
        img: seisAzulIMG,
    },
    {
        color: "AZUL",
        valor: "7",
        img: sieteAzulIMG,
    },
    {
        color: "AZUL",
        valor: "8",
        img: ochoAzulIMG,
    },
    {
        color: "AZUL",
        valor: "9",
        img: nueveAzulIMG,
    },
    {
        color: "AZUL",
        valor: "+2",
        img: mas2AzulIMG,
    },
    {
        color: "AZUL",
        valor: "SALTO DE TURNO AZUL",
        img: saltoDeTurnoAzulIMG,
    },

    //****************************VERDES****************************

    {
        color: "VERDE",
        valor: "1",
        img: unoVerdeIMG,
    },
    {
        color: "VERDE",
        valor: "2",
        img: dosVerdeIMG,
    },
    {
        color: "VERDE",
        valor: "3",
        img: tresVerdeIMG,
    },
    {
        color: "VERDE",
        valor: "4",
        img: cuatroVerdeIMG,
    },
    {
        color: "VERDE",
        valor: "5",
        img: cincoVerdeIMG,
    },
    {
        color: "VERDE",
        valor: "6",
        img: seisVerdeIMG,
    },
    {
        color: "VERDE",
        valor: "7",
        img: sieteVerdeIMG,
    },
    {
        color: "VERDE",
        valor: "8",
        img: ochoVerdeIMG,
    },
    {
        color: "VERDE",
        valor: "9",
        img: nueveVerdeIMG,
    },
    {
        color: "VERDE",
        valor: "+2",
        img: mas2VerdeIMG,
    },
    {
        color: "VERDE",
        valor: "SALTO DE TURNO VERDE",
        img: saltoDeTurnoVerdeIMG,
    },

    //******************ROJAS****************************

    {
        color: "ROJO",
        valor: "1",
        img: unoRojoIMG,
    },
    {
        color: "ROJO",
        valor: "2",
        img: dosRojoIMG,
    },
    {
        color: "ROJO",
        valor: "3",
        img: tresRojoIMG,
    },
    {
        color: "ROJO",
        valor: "4",
        img: cuatroRojoIMG,
    },
    {
        color: "ROJO",
        valor: "5",
        img: cincoRojoIMG,
    },
    {
        color: "ROJO",
        valor: "6",
        img: seisRojoIMG,
    },
    {
        color: "ROJO",
        valor: "7",
        img: sieteRojoIMG,
    },
    {
        color: "ROJO",
        valor: "8",
        img: ochoRojoIMG,
    },
    {
        color: "ROJO",
        valor: "9",
        img: nueveRojoIMG,
    },
    {
        color: "ROJO",
        valor: "+2",
        img: mas2RojoIMG,
    },
    {
        color: "ROJO",
        valor: "SALTO DE TURNO ROJO",
        img: saltoDeTurnoRojoIMG,
    },

]