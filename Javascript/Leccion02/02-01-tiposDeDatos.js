var nombre = "Marina"; //Tipo string
console.log(typeof nombre);

var numero = 3000;
console.log(numero);

var objeto = {
    nombre : "Marina",
    apellido : "Rebolloso",
    telefono : "2606"
}
console.log(typeof objeto);

//Tipo de dato booleano
var bandera = true;
console.log(typeof bandera);

//Tipo de dato funcion
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato symbol
var simbolo = Symbol ("Mi símbolo");
console.log(typeof simbolo);

//Tipo de dato clase

class persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof persona)

//Tipo de dato undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

//Null: ausencia de valor
var y = null; //No es un tipo de dato pero su origen es object
console.log(typeof y)

//Tipo de dato array
var autos = ["Citroen", "Audi", "BMW", "Ford"]
console.log(typeof autos);

var z= '';
console.log(typeof z); //Se refiere a que es cadena vacía
