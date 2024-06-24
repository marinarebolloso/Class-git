#Ciclo while (mientras o durante)
"""
condicion = 0
while condicion < 78:
    print("Ejecutando el ciclo while")
    condicion += 1
else:
    print("Fin del ciclo while")
"""
#Imprimir números del 0 al 5 con el ciclo while
"""
maximo = 5
contador = 0
while contador <= maximo:
    print(contador)
    contador += 1
"""
#Imprimir números de 5 al 1 con el ciclo while
"""
minimo = 1
contador = 5
while contador >= minimo:
    print(contador)
    contador -= 1
"""
#Ciclo for
"""
cadena = "Hello"
for letra in cadena:
    print(letra)
else:
    print("Fin del ciclo")
"""
#Palabra reservada break
"""
for letra in "Alemania":
    if letra == "a":
        print(f"Letra encontrada: {letra}")
        break
else:
    print("Fin del ciclo")
"""
#Palabra reservada continue
for i in range(6):
    if i % 2 == 0:
        print(f"valor: {i}")

for i in range(6):
    if i % 2 != 0:
        continue
    print(f"Valor: {i}")