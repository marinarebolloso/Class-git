#Ejercicio 1: programa que devuelva por consola si un año es bisiesto
"""
def anioBisiesto(num):
    if (num % 4 == 0 and num % 100 != 0) or (num % 400 == 0):
        print(f"El año {num} es bisiesto.")
    else:
        print(f"El año {num} no es bisiesto.")

opcion = 1
while opcion == 1:
    num = int(input("Ingrese un año: "))
    anioBisiesto(num)
    opcion = int(input("Para seguir adelante digite la opción 1, para salir digite cualquier otro número: "))
"""
#Ejercicio 2: Calcular la suma de N números

"""
n = int(input("Digite la cantidad de números a sumarse"))
suma = 0

for i in range(n):
    num2 = int(input(f"Ingrese el número {i + 1}: "))
    suma += num2
print(f"La suma de los {n} números ingresados es {suma}")
"""

#Ejercicio 3: leer 10 números e imprimir cuántos son positivos, negativos y neutros
"""
numPositivo = 0
numNegativo = 0
numNeutro = 0

for i in range(10):
    num3 = int(input(f"Ingrese el {i + 1} número que desea comprobar"))
    if num3 == 0:
        numNeutro += 1
    elif num3 >= 0:
        numPositivo += 1
    else:
        numNegativo += 1
print(f"De los números digitados, {numNeutro} son neutros, {numPositivo} son positivos y {numNegativo} son negativos")
"""
#Ejercicio 4: Algoritmo para calcular calificación promedio y más baja de un grupo

suma1 = 0
calificacionBaja = 999999

for i in range(10):
    calificacion = int(input(f"Ingrese la {i + 1} calificación: "))
    suma1 += calificacion
    if calificacion < calificacionBaja:
        calificacionBaja = calificacion

calificacionPromedio = suma1 / 10
print(f"La calificación promedio es: {calificacionPromedio}"
      f" y la calificación más baja es: {calificacionBaja}")