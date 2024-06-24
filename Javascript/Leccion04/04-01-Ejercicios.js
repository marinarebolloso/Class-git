//Ampliando el uso de var let y const

var nombre = "Ariel";
nombre = "Osvaldo";
console.log(nombre);

function saludar(){
    var nombre = "Natalia";
    console.log(nombre);
}
console.log(nombre); //Aquín no lee el dato en la función

if(true){
    var edad = 34;
    console.log(edad);
}
console.log(edad); //En la función anda correctamente, en la estructura if falla