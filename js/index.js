class Escenario {
    constructor(seleccion1, seleccion2, ganador) {

        // this.jugador1 = seleccion1
        // this.jugador2 = seleccion2
        // this.ganador = null
    }


}

class Avatar {
    constructor(nombre, fuerza) {
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


let avatar1 = new Avatar("Darth Vader", "200")
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
const avatarDarthVader = () => {
    // alert("hola") //entra en función 

    if (jugador1.avatar == undefined) { //si jugador1.avatar está vacío inserta a avatar1 
        let result = jugador1.avatar = avatar1
        console.log(result) //prueba exitosa
    } else if (jugador1.avatar !== undefined && jugador2.avatar == undefined) { //si jugador1.avatar ya está lleno, inserta a avatar1 a jugador2 
        jugador2.avatar = avatar1
    } else if (jugador1.avatar == undefined && jugador2.avatar == undefined) {

        alert("ERROR!!")
    }
}

const avatarYoda = () => {
    // alert("hola") //entra en función 

    if (jugador1.avatar == undefined) { //si jugador1.avatar está vacío inserta a avatar2
        let result = jugador1.avatar = avatar2
        console.log(result) //prueba exitosa
    } else if (jugador1.avatar !== undefined && jugador2.avatar == undefined) { //si jugador1.avatar ya está lleno, inserta a avatar1 a jugador2 
        jugador2.avatar = avatar2
    } else if (jugador1.avatar !== undefined && jugador2.avatar !== undefined) {
        alert("ERROR!!")
    }
}

const avatarDarthHall = () => {
    // alert("hola") //entra en función 
    if (jugador1.avatar == undefined) { //si jugador1.avatar está vacío inserta a avatar2
        let result = jugador1.avatar = avatar3
        console.log(result) //prueba exitosa
    } else if (jugador1.avatar !== undefined && jugador2.avatar == undefined) { //si jugador1.avatar ya está lleno, inserta a avatar a jugador2 
        jugador2.avatar = avatar3
    } else if (jugador1.avatar !== undefined && jugador2.avatar !== undefined) {
        alert("ERROR!!")
    }
}
const avatarLukeSkywalker = () => {
    alert("hola") //entra en función
    if (jugador1.avatar == undefined) { //si jugador1.avatar está vacío inserta a avatar2
        let result = jugador1.avatar = avatar4
        console.log(result) //prueba exitosa
    } else if (jugador1.avatar !== undefined && jugador2.avatar == undefined) { //si jugador1.avatar ya está lleno, inserta a avatar1 a jugador2 
        jugador2.avatar = avatar4
    } else if (jugador1.avatar !== undefined && jugador2.avatar !== undefined) {
        alert("ERROR!!")
    }
}


// PROCESO DE SELECCION 