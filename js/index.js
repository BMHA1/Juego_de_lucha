class Escenario {
    constructor(seleccion1, seleccion2, ganador) {

        // this.jugador1 = seleccion1
        // this.jugador2 = seleccion2
        // this.ganador = null
    }


}

class Avatar {
    constructor(nombre, fuerza, img) {
        this.nombre = nombre;
        this.fuerza = fuerza
    }

}
class Jugador {

    constructor(avatar) {
        this.vida = 100
        this.avatar = avatar
    }
}
// ganar(vida) {
//     if (vida.Avatar1.vida == 0) {
//         alert(`GANASTE+ ${avatar2}`)
//     } else if () {


//     }
// }


let avatar1 = new Avatar("Darth Vader", "200", "/Imagenes/Darth_Vader.jpg")
console.log(avatar1)
let avatar2 = new Avatar("Yoda", "350")
console.log(avatar2)
let avatar3 = new Avatar("Darth Hall", "350")
console.log(avatar3)
let avatar4 = new Avatar("Luke Skywalker", "450")
console.log(avatar4)

let jugador1 = new Jugador()
console.log(jugador1)
let jugador2 = new Jugador()
console.log(jugador2)
let escenario1 = new Escenario()

// PROCESO DE SELECCION 

const avatarSelection = (player) => {

    if (jugador1.avatar == undefined || jugador2.avatar == undefined) {

        // alert("hola") //entra en función 
        switch (player) {
            case 'dartVader':

                if (jugador1.avatar == undefined) {
                    let result = jugador1.avatar = avatar1

                }
                console.log(result) //prueba exitosa
                break;
            case 'yoda':
                if (jugador1.avatar == undefined) {
                    let result = jugador1.avatar = avatar1

                }
                console.log(result) //prueba
            case 'dartHall':
                if (jugador1.avatar == undefined) {
                    let result = jugador1.avatar = avatar1

                }
                console.log(result) //prueba
            case 'lukeSkywalker'
            if (jugador1.avatar == undefined) {
                let result = jugador1.avatar = avatar1

            }


        }

    }
}



segundaPantalla()

}




