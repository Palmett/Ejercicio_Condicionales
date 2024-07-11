
/*Iba a comitear todo y que fueran decomiteando poco a poco pero el profesor Carlos dijo lo mandaramos sin así.

 Imprimí por alert para que sea visible desde la misma pantalla del navegador y no tener que estar viendo la consola espero eso no me baje puntos


//1. Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.
let a = parseInt(prompt("Ingrese el primer numero a evaluar: "))
let b = parseInt(prompt("Ingrese el segundo numero a evaluar: "))

a > b 
? (console.log(`el primer numero ${a} es mayor que el segundo`), alert(`el primer numero "${a}" es mayor que el segundo "${b}"`) )
: (console.log(`el primer numero es menor que el segundo`), alert(`el primer numero "${a}" es menor que el segundo "${b}"`))


//2.Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.

let c = parseInt(prompt("Ingrese el primer numero a evaluar: "))
let d = parseInt(prompt("Ingrese el segundo numero a evaluar: "))

c === d 
? (console.log("Los numeros son iguales."),alert("Los numeros son iguales."))
: (console.log("Los numeros son diferentes."), alert("Los numeros son diferentes."))


//3. Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.

let e = parseInt(prompt("Ingrese el primer numero a evaluar: "))
let f = parseInt(prompt("Ingrese el segundo numero a evaluar: "))

e > f 
? (console.log(`el primer numero ${e} es mayor que el segundo`), alert(`el primer numero ${e} es mayor que el segundo`)) 
: (console.log(`el segundo numero ${f} es mayor que el primero`), alert(`el segundo numero ${f} es mayor que el primero`))


//4.Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el más chico.

let g = parseInt(prompt("Ingrese el primer numero a evaluar: "))
let h = parseInt(prompt("Ingrese el segundo numero a evaluar: "))
let i = parseInt(prompt("Ingrese el tercer numero a evaluar: "))

function menor(g,h,i){

    if (g === h || h ===i || i ===g ){
        console.log("Escriba numeros diferentes, hay algunos repetidos")
        alert("Escriba numeros diferentes, hay algunos repetidos")
        
    }else if(g<h && g <i){
        console.log(g, " es el numero menor")
        alert(g + " es el numero menor")
    
    }else if(h<g && h <i){
        console.log(h, " es el numero menor")
        alert(h + " es el numero menor")
    }else{
        console.log(i, " es el numero menor")
        alert(i+ " es el numero menor")
        
        
    }
}

menor(g,h,i)


//5. Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.

//omitire cuando tienen la misma edad supondre que siempre tienen edades distintas


let persona1 = {
    nombre : "Alfredo" , edad : 9 , altura : 1.20

}

 let persona2 = {
    nombre : "Martha", edad : 8 , altura : 1.30
}

if (persona1["edad"] > persona2["edad"]){
    console.log(`${persona1["nombre"]} es mayor`)
    alert(`${persona1["nombre"]} es mayor`)

}else{
    console.log(`${persona2["nombre"]} es mayor`)
    alert(`${persona2["nombre"]} es mayor`)
}

if (persona1["altura"] > persona2["altura"]){
    console.log(`${persona1["nombre"]} es más alto`)
    alert(`${persona1["nombre"]} es más alto`)
}else{
    console.log(`${persona2["nombre"]} es más alta`)
    alert(`${persona2["nombre"]} es más alta`)
}

//6. Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo.

let nombre1 = prompt("Ingrese su nombre: ")
let edad1 = parseInt(prompt("Ingrese su edad: "))
let altura1 = parseInt(prompt("Ingrese su altura en cm: "))
let vision = parseInt(prompt("Ingrese el rango de su vision (0-10): "))

if (edad1 >= 18 && altura1 >= 150 && vision >=8){
    console.log("Estás capacitado para conducir.")
    alert("Estás capacitado para conducir.")
}else{
    console.log("Lo sentimos no puedes conducir")
    alert("Lo sentimos no puedes conducir")
}


//7. Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por último de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o más, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.

let nombre2 = prompt("Ingrese su nombre: ").toLowerCase()
let pase = prompt("Cual es su pase: ").toUpperCase()
let entrada = prompt("tiene entrada?: ").toLowerCase()



if (nombre2 === "fernando" || pase === "VIP"){
    console.log("Tienes ingreso libre, bienvenido.")
    alert("Tienes ingreso libre, bienvenido.")

}else if (entrada === "si" || entrada === "s" || entrada === "true") {

    let usar_Entrada = prompt("¿Desea utilizar su entrada?: ").toLowerCase()
    if (usar_Entrada === "si" || usar_Entrada === "s" || usar_Entrada === "true") {
        console.log("¡Bienvenido!")
        alert("¡Bienvenido!")
    } else {
        console.log("Lo sentimos, no puedes ingresar.")
        alert("Lo sentimos, no puedes ingresar.")
    }
} else {
    let desea_Comprar = prompt("¿Desea comprar una entrada?: ").toLowerCase()
    if (desea_Comprar === "si" || desea_Comprar === "s" || desea_Comprar === "true") {
        let dinero_Disponible = parseFloat(prompt("¿Cuánto dinero disponible tiene?: "))
        if (dinero_Disponible >= 1000) {
            console.log("Venta de entrada realizada. ¡Bienvenido!")
            alert("Venta de entrada realizada. ¡Bienvenido!")
        } else {
            console.log("Lo sentimos, no tiene suficiente dinero para comprar una entrada.")
            alert("Lo sentimos, no tiene suficiente dinero para comprar una entrada.")
        }
    } else {
        console.log("Gracias, que tenga un buen día.")
        alert("Gracias, que tenga un buen día.")
    }
}




//8. Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el número.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera más eficiente.

// con un while esto fuese sido mas sencillo pero tratare de hacerlo sin esto supongo eso es lo que se esta evaluando, este es el mas complicado por lo de los intentos pensar en como mostrarle de nuevo el mensaje al usuario me gusto.

let numero_Incognita = 5
let numero_Ingresado= parseInt(prompt("Ingrese un numero:"))
let bandera = false

if (numero_Ingresado === numero_Incognita){
    console.log("Felicidades adivinaste")
    bandera = true 
}else if (numero_Ingresado > numero_Incognita){
    console.log("Intenta nuevamente te pasaste")
    numero_Ingresado= parseInt(prompt("Ingrese un numero:"))
}else if (numero_Ingresado < numero_Incognita){
    console.log("Intenta nuevamente te falta")
    numero_Ingresado= parseInt(prompt("Ingrese un numero:"))
}


if (numero_Ingresado === numero_Incognita && bandera === false){
    console.log("Felicidades adivinaste")
    bandera = true 
}else if (numero_Ingresado > numero_Incognita){
    console.log("Intenta nuevamente te pasaste")
    numero_Ingresado= parseInt(prompt("Ingrese un numero:"))
}else if (numero_Ingresado < numero_Incognita){
    console.log("Intenta nuevamente te falta")
    numero_Ingresado= parseInt(prompt("Ingrese un numero:"))
}


if (numero_Ingresado === numero_Incognita && bandera === false){
    console.log("Felicidades adivinaste")

}else if (numero_Ingresado > numero_Incognita){
    console.log("Lo sentimos no adivinaste el numero te sobraba")
    
}else if (numero_Ingresado < numero_Incognita){
    console.log("Lo sentimos no adivinaste el numero te faltaba")
}



//9. Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente (13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.

let edad3 = parseInt(prompt("Ingrese su edad:"))

if (edad3 >= 0 && edad3 <= 12) {
    console.log("Eres un infante")
    alert("Eres un infante")
} else if (edad3 >= 13 && edad3 <= 18) {
    console.log("Eres un adolescente")
    alert("Eres un adolescente")
} else if (edad3 >= 19 && edad3 <= 45) {
    console.log("Eres un mayor joven")
    alert("Eres un mayor joven")
} else if (edad3 >= 46 && edad3 <= 100) {
    console.log("Eres un anciano")
    alert("Eres un anciano")
} else if (edad3 > 100) {
    let confirmacion = confirm("¿De verdad tienes " + edad3 + " años?")
    if (confirmacion) {
        console.log("Eres una persona muy anciana, ¡felicidades!")
        alert("Eres una persona muy anciana, ¡felicidades!")
    } else {
        console.log("Entendido, gracias por tu respuesta.")
        alert("Entendido, gracias por tu respuesta.")
    }
} else {
    console.log("Edad ingresada no válida.")
    alert("Edad ingresada no válida.")
}



//10. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.

let jugador1 = prompt("Jugador 1 Ingrese su elección:")
let jugador2 = prompt("Jugador 2 Ingrese su elección:")

jugador1 = jugador1.toUpperCase()
jugador2 = jugador2.toUpperCase()

if (jugador1 !== "PIEDRA" && jugador1 !== "PAPEL" && jugador1 !== "TIJERA"){
    console.log(`Jugador 1 hizo trampa, ${jugador1} no es un dato válido`)
    alert(`Jugador 1 hizo trampa, "${jugador1}" no es un dato válida.`)
}else if (jugador2 !== "PIEDRA" && jugador2 !== "PAPEL" && jugador2 !== "TIJERA"){
    console.log(`Jugador 2 hizo trampa, ${jugador2} no es un dato válido`)
    alert(`Jugador 2 hizo trampa, ${jugador2} no es un dato válido`)
}else if (jugador1 === jugador2){
    console.log("Empate")
    alert("Empate")
}else if (jugador1 == "PIEDRA" && jugador2 == "TIJERA" || jugador1 == "TIJERA" && jugador2 == "PAPEL" || 
    jugador1 == "PAPEL" && jugador2 == "PIEDRA"
){ 
   console.log("Jugador 1 ha ganado") 
   alert("Jugador 1 ha ganado") 
}else{
    console.log("Jugador 2 ha ganado")
    alert("Jugador 2 ha ganado")
}

//11. Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.

let color = prompt("Ingrese un color:").toLowerCase()

switch (color) {
    case "blanco":

    case "negro":
        console.log("Falta de color")
        alert("Falta de color")
        break
    case "verde":
        console.log("El color de la naturaleza")
        alert("El color de la naturaleza")
        break
    case "azul":
        console.log("El color del agua")
        alert("El color del agua")
        break
    case "amarillo":
        console.log("El color del sol")
        alert("El color del sol")
        break
    case "rojo":
        console.log("El color del fuego")
        alert("El color del fuego")
        break
    case "marron":
        console.log("El color de la tierra")
        alert("El color de la tierra")
        break
    default:
        console.log("Excelente elección, no lo teníamos pensado.")
        alert("Excelente elección, no lo teníamos pensado.")
        break
}




//12. Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.

let num1 = parseInt(prompt("Ingrese el primer valor: "))
let num2 = parseInt(prompt("Ingrese el segundo valor: "))
let operacion = prompt("Ingrese la operacion que desea: ").toLowerCase()
let resultado = 0

switch (operacion) {
    case "suma":
        resultado = num1 + num2
        break;

    case "resta":
        resultado = num1 - num2
        break;
    
    case "multiplicacion":
        resultado = num1 * num2
        break;        
    
    case "division":
        if (num2 == 0){
            console.log("no se puede dividir entre 0")
            resultado = null
        }else{
            resultado = num1 / num2
        }
        
        break;
    


    default: console.log("No tenemos prevista esa operacion ingrese una válida")
        resultado = null
        break;
}


if (resultado !== null){
    console.log(`el resultado de su operacion es ${resultado}`)

}
    
*/
//13. Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.


 let   nombres = prompt("Ingrese sus nombres: ")
 let   apellidos = prompt("Ingrese sus apellidos: ")
 let  lugar_nacimiento = prompt("Ingrese su lugar de nacimiento: ")
 let   fecha_nacimiento = prompt("Ingrese su fecha de nacimiento (DD/MM/AAAA): ")
 let   lugar_expedicion = prompt("Ingrese su lugar de expedición: ")
 let   numero_cedula = prompt("Ingrese su número de cédula: ")
 let   sexo = prompt("Ingrese su género: ")
 let   estatura = prompt("Ingrese su estatura: ")
 let   grupo_sanguineo = prompt("Ingrese su grupo sanguíneo: ")


 console.log("Datos ingresados:")
 console.log(`Nombres: ${nombres}`)
 console.log(`Apellidos: ${apellidos}`)
 console.log(`Lugar de nacimiento: ${lugar_nacimiento}`)
 console.log(`Fecha de nacimiento: ${fecha_nacimiento}`)
 console.log(`Lugar de expedición: ${lugar_expedicion}`)
 console.log(`Número de cédula: ${numero_cedula}`)
 console.log(`Género: ${sexo}`)
 console.log(`Estatura: ${estatura}`)
 console.log(`Grupo sanguíneo: ${grupo_sanguineo}`)


 let confirmacion = prompt("¿Son correctos los datos ingresados? (SI/NO)").toUpperCase();

 if (confirmacion === "SI") {
    let dni = {
        nombres: nombres,
        apellidos: apellidos,
        lugar_nacimiento: lugar_nacimiento,
        fecha_nacimiento: fecha_nacimiento,
        lugar_expedicion: lugar_expedicion,
        numero_cedula: numero_cedula,
        sexo: sexo,
        estatura: estatura,
        grupo_sanguineo: grupo_sanguineo
    }
    console.log("Registro exitoso:")
    alert("Registro exitoso")
    console.table(dni)
} else {
    console.log("Vuelva a intentarlo en 1 mes.")
    alert("Vuelva a intentarlo en 1 mes.")
}






