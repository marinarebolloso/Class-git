
/*
//Ejercicio 1: Determinar si un alumno aprueba o no un curso
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Leer las tres calificaciones del alumno
        System.out.print("Ingresa la primera calificación: ");
        double calificacion1 = scanner.nextDouble();

        System.out.print("Ingresa la segunda calificación: ");
        double calificacion2 = scanner.nextDouble();

        System.out.print("Ingresa la tercera calificación: ");
        double calificacion3 = scanner.nextDouble();

        // Calcular el promedio de las calificaciones
        double promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

        // Determinar si el alumno aprueba o no
        if (promedio >= 70) {
            System.out.println("El alumno aprueba con un promedio de " + promedio);
        } else {
            System.out.println("El alumno no aprueba con un promedio de " + promedio);
        }

        // Cerrar el scanner
        scanner.close();
    }
}

//Ejercicio 2: Un almacén descuenta 20% en compras iguales o superiores a 100
//Crear programa que determine cuánto se pagará.

import java.util.Scanner;
        public class Main {
            public static void main(String[] args) {
                Scanner scanner = new Scanner(System.in);

                // Leer el monto total de la compra
                System.out.print("Ingresa el monto total de la compra: ");
                double montoTotal = scanner.nextDouble();

                // Calcular el monto a pagar aplicando el descuento si corresponde
                double montoAPagar;
                if (montoTotal >= 100) {
                    montoAPagar = montoTotal * 0.80; // Aplicar el 20% de descuento
                } else {
                    montoAPagar = montoTotal; // No se aplica descuento
                }

                // Mostrar el monto a pagar
                System.out.println("El monto a pagar es: " + montoAPagar);

                // Cerrar el scanner
                scanner.close();
            }
        }
*/
//Ejercicio 3: leer dos números: si son iguales que los multiplique, si el primero es mayor
// que el segundo que los reste y si no que los sume.
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Leer los dos números ingresados por el usuario
        System.out.print("Ingresa el primer número: ");
        double numero1 = scanner.nextDouble();

        System.out.print("Ingresa el segundo número: ");
        double numero2 = scanner.nextDouble();

        // Realizar la operación correspondiente
        double resultado;
        if (numero1 == numero2) {
            resultado = numero1 * numero2; // Si son iguales, multiplicarlos
        } else if (numero1 > numero2) {
            resultado = numero1 - numero2; // Si el primero es mayor, restarlos
        } else {
            resultado = numero1 + numero2; // Si no, sumarlos
        }

        // Mostrar el resultado
        System.out.println("El resultado de la operación es: " + resultado);

        // Cerrar el scanner
        scanner.close();
    }
}
