

let nombres={
    
    nombre:"juan",
    apellido:"perez"
}

console.log(nombres.nombre)

console.log(nombres.hasOwnProperty("nombre"))

class Escenario{
    constructor(jugador1, jugador2, ganador){

        this.jugador1=jugador1
        this.jugador2=jugador2
        this.ganador=null
    }

        ataque(atacante){
            if(atacante==1){
                this.jugador2.vida-=1
            }
        }
    
}
class Jugador {
        constructor(nombre){

            this.nombre = nombre;
            this.vida=100;

        }

}


let avatar1 = new Jugador(Darth Vader)
console.log(avatar1)