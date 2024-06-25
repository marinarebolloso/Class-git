//Ejercicio para encontrar números pares e impares

let parImpar = 10;
if (parImpar % 2 == 0){
console.log("El número es par")
}
else {
    console.log ("El número es impar")
}

//Ejercicio mayor de edad

let edad = 14, adulto = 18;
if (edad >= adulto){
    console.log("Usted es una persona adulta")
}
else{
    console.log("Usted es una persona menor de edad")
}

//Ejercicio: dentro de un rango

let dentroRango = 5; //Vamos cambiando acá el valor
let valMin = 0, valMax = 10;
if (dentroRango >= valMin && dentroRango <= valMax){
    console.log("Está dentro del rango")
}
else{
    console.log("Está fuera del rango")
}

//Ejercicio: si el padre puede o no asistir al juego del hijo
let vacaciones = false, diaDescanso = false;
if(vacaciones || diaDescanso){
    console.log("El padre puede asistir al juego")
}
else{
    console.log("Elpadre no puede asistir")
}

//Operador ternario

let resultado2 = 3 > 2 ? "Verdadero" : "Falso";
console.log(resultado2)
let numero = 9;
resultado2 = numero % 2 == 0 ? "Este es un número par" : "Este es un número impar";
console.log(resultado2)

// Convertir string a número

let miNumero = "10"; //cadena
console.log(typeof miNumero);
let edad2 = Number(miNumero);
console.log(typeof edad2);
if(isNaN(edad2 >= 18)){
    console.log("Puede votar");
}
else{
    console.log("Muy joven para votar");
}

let resultado3 = edad2 >= 18 ? "Puede votar": "Muy joven para votar";
console.log(resultado3)

//Función isNaN
