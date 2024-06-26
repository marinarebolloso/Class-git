import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Ejercicio6 {
    public static void main(String[] args) {

   //Programa que calcule cantidad de dólares de unos amigos. Guillermo tiene N
        //Luis la mitad que posee Guillermo
        //Juan la mitad de lo que Guillermo y Luis tienen juntos.

   Scanner scanner = new Scanner(System.in);


   //Pedimos al usuario la cantidad de dólares que tiene Guillermo
        System.out.println("Ingrese la cantidad de dólares que tiene Guillermo");
        float dolarGuillermo = scanner.nextFloat();

        float dolarLuis = dolarGuillermo / 2; //Cálculo de dólares de Luis y Juan a partir de los datos
        float dolarJuan = (dolarGuillermo + dolarLuis) / 2;

        //Cálculo total
        float dolarTotal = dolarGuillermo + dolarLuis + dolarJuan;
        System.out.println("Guillermo tiene USD "+dolarGuillermo+" Luis USD "+dolarLuis+" y Juan tiene USD "+dolarJuan+". En total tienen: USD "+dolarTotal);






    }
}