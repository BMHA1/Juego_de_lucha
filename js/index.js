class Avatar {
    constructor(nombre, fuerza, img) {
        this.vida = 100
        this.nombre = nombre;
        this.fuerza = fuerza
        this.imagenAvatar = img
    }


}
class Jugador {

    constructor(avatar) {
        this.avatar = avatar
    }

    atacar(jugadorPierdevida, jugadorataca) {
        let resultVida;
        resultVida = jugadorPierdevida.avatar.vida - jugadorataca.avatar.fuerza
        return jugadorPierdevida.avatar.vida = resultVida

    }


}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


let avatar1 = new Avatar("Darth Vader", 0, `<img class="imagen-seleccionado" src="/Imagenes/Darth_Vader.jpg"alt="Darth Vader">`)
// console.log(avatar1)
let avatar2 = new Avatar("Yoda", 0, `<img class="imagen-seleccionado" src="/Imagenes/Yoda.jpg" alt="Yoda">`)
// console.log(avatar2)
let avatar3 = new Avatar("Darth Hall", 0, `<img class="imagen-seleccionado" src="/Imagenes/Darth_hall.jpg"alt="Darth Hall">`)
// console.log(avatar3)
let avatar4 = new Avatar("Luke Skywalker", 0, ` <img class="imagen-seleccionado" src="/Imagenes/Luke_Skywalker.jpg"alt="-"> `)
// console.log(avatar4)

let jugador1 = new Jugador()
// console.log(jugador1)
let jugador2 = new Jugador()
// console.log(jugador2)
// let escenario1 = new Escenario()

// PROCESO DE SELECCION 
let fuerzaRamdon = getRandomArbitrary(5, 20)

function avatarSelection(player) {


    if (jugador1.avatar == undefined || jugador2.avatar == undefined) {


        switch (player) {


            case 'darthVader'://avatar1
                if (jugador1.avatar == undefined) {

                    jugador1.avatar = avatar1;


                } else if (jugador2.avatar == undefined && jugador1.avatar !== avatar1) {

                    jugador2.avatar = avatar1;
                    starGame();
                }
                break
            case 'yoda'://avatar2
                if (jugador1.avatar == undefined) {

                    jugador1.avatar = avatar2;


                } else if (jugador2.avatar == undefined && jugador1.avatar !== avatar2) {
                    jugador2.avatar = avatar2;
                    starGame();

                }
                break

            case 'dartMaul'://avatar3
                if (jugador1.avatar == undefined) {

                    jugador1.avatar = avatar3;


                } else if (jugador2.avatar == undefined && jugador1.avatar !== avatar3) {
                    jugador2.avatar = avatar3;
                    starGame();
                }
                break
            case 'lukeSkywalker'://avatar4
                if (jugador1.avatar == undefined) {

                    jugador1.avatar = avatar4;



                } else if (jugador2.avatar == undefined && jugador1.avatar !== avatar4) {

                    jugador2.avatar = avatar4;
                    starGame();

                }
                break
        }
    }

}




let pantallaPrincipalCombate = document.querySelector(".pantalla-principal-combate")
let pantallaPrincipalSeleccion = document.querySelector(".pantalla-principal-seleccion")
let contenedorJugador1 = document.querySelector(".contenedor-seleccionado-1")
let contenedorJugador2 = document.querySelector(".contenedor-seleccionado-2")


const starGame = () => {
    pantallaPrincipalSeleccion.style.display = 'none'
    pantallaPrincipalCombate.style.display = 'flex';
    contenedorJugador1.innerHTML = jugador1.avatar.imagenAvatar
    contenedorJugador2.innerHTML = jugador2.avatar.imagenAvatar
}

let botonAtacar1 = document.querySelector(".boton-ataque-1")
let contenedorVida1 = document.querySelector(".vida-1")
let contenedorVida2 = document.querySelector(".vida-2")

const atacarContricante = (atacante) => {
    switch (atacante) {
        case 'jugador1':
            jugador1.avatar.fuerza = fuerzaRamdon
            jugador1.atacar(jugador2, jugador1) // método (jugadorPierdevia,jugadorqueataca)
            contenedorVida2.innerHTML = jugador2.avatar.vida //
            if (jugador2.avatar.vida <= 0) {
                funcionFinJuego(jugador1)
            } break;
        case 'jugador2':
            jugador2.avatar.fuerza = fuerzaRamdon
            jugador2.atacar(jugador1, jugador2) 
            contenedorVida1.innerHTML = jugador1.avatar.vida
            if (jugador1.avatar.vida <= 0) { //si jugador 1 pierde, inicia función fin de juego e imprime el ganador
                funcionFinJuego(jugador2)
            } break;
    }
}


let pantallaFinCombate = document.querySelector(".pantalla-fin-combate")
let nombreGanador = document.querySelector(".nombre-ganador")
let jugadorGanador = document.querySelector(".contenedor-ganador")

const funcionFinJuego = ganador => {
    pantallaPrincipalCombate.style.display = 'none';
    pantallaFinCombate.style.display = 'flex'
    nombreGanador.innerHTML = ganador.avatar.nombre
    console.log(ganador)
    jugadorGanador.innerHTML = ganador.avatar.imagenAvatar
}