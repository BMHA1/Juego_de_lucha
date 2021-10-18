# Juego_de_lucha
## HERRAMIENTAS
- HTML
- CSS
- JAVASCRIPT
## RESUMEN DEL JUEGO:

Es un juego de lucha, compuesto por tres escenarios:  Selección, lucha y fin de partida, para la elaboración del juego he utilizado *P.O.O.*  creando dos clases : avatar y jugador con respecto a la estructura principal del cofigo está formada
por 4 funciones que nos permiten elegir los jugadores, iniciar la partida, atacar y la seleccion del ganador. 

a continuación explicaré con más detalle cada una de esas funciones. 

## CLASES E INSTANCIA:  
    he elaborado dos clases y de ellas he instanciado 2 para los jugadores, y 4 para los avatares. 

```javascript
		class Jugador {

    constructor(avatar) {
        this.avatar = avatar
    }
			```
    La icreacion de una clase jugador nos permité aumentar la escalabilidad del juego, lo cual permite aumentar la cantidad de jugadores con mucha más facilidad y orden en nuestro codigo,  con respecto a la propiedad  *avatar = undifined*  con valor undefined para 
    poder absorber al avatar seleccionado y que sea la pieza angular para las estructuras de control que he utilizado. 

```javascript
	class Avatar {
    constructor(nombre, fuerza, img) {
        this.vida = 100
        this.nombre = nombre;
        this.fuerza = fuerza
        this.imagenAvatar = img
    }
			```
    Las propiedades de la clase Avatar,son creadas y la he utilizados para darle "vida", "identidad", "poder" e "imagen" al avatar, con la vida y el poder creé las condiciones de ataque y el fin del juego. 
    mientras que con el nombre y la imagen he logrado ubicar el avatar en todo el codigo. 

## FUNCIONES: 


```javascript
 const avatarSelection=(player)=>  
    }
			```  
        -La función avatarSelection: tiene la función de pasar por parárametro el jugador selección, gracias a un onclick que posee cada jugador, luego he utilizado un *switch* lo que permite formar una estructura de control más eficiente y ordenada. 
    cuando el segundo jugador selecciona llama a la función stargame.  
   
```javascript
const starGame = () => 

			```  
        -La función starGame: Básicamente la función generá el escenario de pelea y agrupando a los dos avatares seleccionado. 

const atacarContricante = (atacante) =>  

```javascript

const atacarContricante = (atacante) =>  

			```  
        - La función atacarContricante: acá he utilizado el misma estructura, un switch para que cuando el jugador ataque, sepa quien atacó y poder restar vida al oponente.



```javascript
const funcionFinJuego = ganador =>
			``` 
        - la siguiente función absorbe como parámetro el jugador ganador, mediante la condición de la vida del oponente que en este caso es igual a cero y a su vez genera otro escenario solo con el jugador ganador. 


## Imágenes 

### Flujograma 
![Flujograma](Imagenes\FLUJOGRAMA.JPG)

### Pantalla principal
![Primera Pantalla](Imagenes\Pantallazo_seleccion.JPG)

### Pantalla Campo de Batalla
![Segunda Pantalla](Imagenes\Pantallazo_batalla.JPG)

