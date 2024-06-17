var nombre = "Jose";
var apellido = " Montes";
var nombreCompleto = nombre+' '+apellido;
console.log(nombreCompleto);
var nombreCompleto2 = "Marina"+" "+"Rebolloso";
console.log(nombreCompleto2);
var juntos = nombre + 219; //lee de izq a der
console.log(juntos);
juntos = nombre + (78 + 17);
console.log(juntos);
juntos = 78 + 17 + nombre;
console.log(juntos);

nombre += apellido // Concatenación simplificada
console.log(nombre);

//Ya no se usa var se usa let y const
let nombre2 = "Pedro ";
console.log(nombre2);

const apellido2 = "Lepes";
//apellido2 = "Perez" una constante no puede ser modificada
console.log(apellido2);

let x, y; //Se pueden crear varias variables en una misma línea
x = 17, y = 21; // se asignan distintas variables en una misma línea
let z = x + y; //se asigna valor de la operación
console.log(x, y, z);


