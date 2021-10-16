// class Escenario {
//     constructor(seleccion1, seleccion2, ganador) {

//         // this.jugador1 = seleccion1
//         // this.jugador2 = seleccion2
//         // this.ganador = null
//     }

// }

class Avatar {
    constructor(nombre, fuerza, img) {
        this.nombre = nombre;
        this.fuerza = fuerza
        this.imagenAvatar = img
    }

}
class Jugador {

    constructor(avatar) {
        this.vida = 100
        this.avatar = avatar
    }
}



let avatar1 = new Avatar("Darth Vader", "200",`<img class="imagen-seleccionado" src="/Imagenes/Darth_Vader.jpg"alt="Darth Vader">`)
// console.log(avatar1)
let avatar2 = new Avatar("Yoda", "350",`<img class="imagen-seleccionado" src="/Imagenes/Yoda.jpg" alt="Yoda">`)
// console.log(avatar2)
let avatar3 = new Avatar("Darth Hall", "350",`<img class="imagen-seleccionado" src="/Imagenes/Darth_hall.jpg"alt="Darth Hall">`)
// console.log(avatar3)
let avatar4 = new Avatar("Luke Skywalker", "450",` <img class="imagen-seleccionado" src="/Imagenes/Luke_Skywalker.jpg"alt="-"> `)
// console.log(avatar4)

let jugador1 = new Jugador()
// console.log(jugador1)
let jugador2 = new Jugador()
// console.log(jugador2)
// let escenario1 = new Escenario()

// PROCESO DE SELECCION 

function avatarSelection(player) {

    if (jugador1.avatar == undefined || jugador2.avatar == undefined) {

        switch (player) {


            case 'darthVader':


                if (jugador1.avatar == undefined) {
                    jugador1.avatar = avatar1;
                    alert("selecciona un segundo jugador");
                } else if (jugador2.avatar == undefined && jugador1.avatar !== avatar1) {

                    jugador2.avatar = avatar1;

                } else {

                    return alert("No puede seleccionar el mismo jugador");
                }


            case 'yoda':

                if (jugador1.avatar == undefined) {

                    jugador1.avatar = avatar2;


                } else if (jugador2.avatar == undefined && jugador1.avatar !== avatar2) {
                    jugador2.avatar = avatar2;

                }

            case 'dartHall':
                if (jugador1.avatar == undefined) {
                    jugador1.avatar = avatar3;

                    alert("selecciona un segundo jugador");
                } else if (jugador2.avatar == undefined && jugador1.avatar !== avatar3) {
                    jugador2.avatar = avatar3;
                    console.log(jugador2);
                }
            case 'lukeSkywalker':
                if (jugador1.avatar == undefined) {

                    jugador1.avatar = avatar4;

                    alert("selecciona un segundo jugador");
                } else if (jugador2.avatar == undefined && jugador1.avatar !== avatar4)
                    jugador2.avatar = avatar4;

        }

    } else {
        starGame(jugador1, jugador2);
    }
}

let pantallaPrincipalCombate = document.querySelector(".pantalla-principal-combate")
let pantallaPrincipalSeleccion=document.querySelector(".pantalla-principal-seleccion") 
let contenedorJugador1=document.querySelector(".contenedor-seleccionado-1")
let contenedorJugador2=document.querySelector(".contenedor-seleccionado-2")




const starGame = (a, b) => {
    console.log(a)
    console.log(b)
    pantallaPrincipalSeleccion.style.display='none'
    pantallaPrincipalCombate.style.display='flex';

    alert("lo hemos logrado cabron")
}

funcionAtacar()


funcionFinJuego()
