//Ejercicio 1: calculando estación del año
let mes = 4;
let estacion; //undefined
if (mes == 1 || mes == 2 || mes == 12){
    estacion = "Verano";
} 
else if (mes == 3 || mes == 4 || mes == 5){
    estacion = "Otoño";
}
else if (mes == 6 || mes == 7 || mes == 8){
    estacion = "Invierno";
}
else if (mes == 9 || mes == 10 || mes == 11){
    estacion = "Primavera";
}
else{
    estacion = "Opción incorrecta"
}
console.log("El valor corresponde a la estación: "+estacion);
//Ejercicio 2: hora del día
let horaDia = 3;
let mensaje;
if (horaDia >= 6 && horaDia <= 11){
    mensaje = "Good morning"
}
else if (horaDia >= 12 && horaDia <= 16){
    mensaje = "Good afternoon"
}
else if (horaDia >= 17 && horaDia <= 19){
    mensaje = "Good evening"
}
else if (horaDia >= 20 && horaDia <= 23){
    mensaje = "Good night"
}
else if (horaDia >= 0 && horaDia <= 5){
    mensaje = "Sweet dreams"
}
else{
    mensaje = "Error"
}
console.log(mensaje)

//Estructura switch (misma sintaxis java)
switch(mes){
    case 1: case 2: case 12:
        estacion = "Verano";
    case 3: case 4: case 5:
        estacion = "Otoño";
    case 6: case 7: case 8:
        estacion = "Invierno";
    case 9: case 10: case 11:
        estacion = "Primavera";
        break;
    default:
        estacion = "Valor incorrecto";
}
console.log("Bienvenido a la estación: "+estacion);

//Ampliando el uso de var let y const

var nombre = "Ariel";
nombre = "Osvaldo";
console.log(nombre);

function saludar(){
    var nombre = "Natalia";
    console.log(nombre);
}
//console.log(nombre); //Aquín no lee el dato en la función

if(true){
    var edad = 34;
    console.log(edad);
}
console.log(edad); //En la función anda correctamente, en la estructura if falla

const fechaNacimiento = 2006;
console.log(fechaNacimiento);
//fechaNacimiento = 2003;
console.log(fechaNacimiento); //solo

//Evitar repetir código

let days = "Sábado";

switch (days){
    case "Lunes":
        console.log("Hoy es: "+days);
        break; 
    case "Martes":
        console.log("Hoy es: "+days);
        break;
    case "Miércoles":
        console.log("Hoy es: "+days);
        break;
    case "Jueves":
        console.log("Hoy es: "+days);
        break;
    case "Viernes":
        console.log("Hoy es: "+days);
        break;
    case "Sábado":
        console.log("Hoy es: "+days);
        break;
}

//Versión mejorada con arreglo

let days2 = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
function getDay(n){
    if (n < 1 || n > 7){
        throw new Error("Out of range");
    }
    return days2[n-1]; 
}
console.log(getDay(2))

//Meses del año
let meses = "Enero";

switch (meses){
    case "Enero":
        console.log("Estamos en: "+meses);
        break; 
    case "Febrero":
        console.log("Estamos en: "+meses);
        break;
    case "Marzo":
        console.log("Estamos en: "+meses);
        break;
    case "Abril":
        console.log("Estamos en: "+meses);
        break;
    case "Mayo":
        console.log("Estamos en: "+meses);
        break;
    case "Junio":
        console.log("Estamos en: "+meses);
        break;
    case "Julio":
        console.log("Estamos en: "+meses);
        break;
    case "Agosto":
        console.log("Estamos en: "+meses);
        break;
    case "Septiembre":
        console.log("Estamos en: "+meses);
        break;
    case "Octubre":
        console.log("Estamos en: "+meses);
        break;
    case "Noviembre":
        console.log("Estamos en: "+meses);
        break;
    case "Diciembre":
        console.log("Estamos en: "+meses);
        break;
}

//Versión mejorada con arreglo

let meses2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
function getMonth(n){
    if (n < 1 || n > 12){
        throw new Error("Out of range");
    }
    return meses2[n-1]; 
}
console.log(getMonth(8))
