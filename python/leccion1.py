miVariable = 3
print(miVariable)
miVariable = "Hello a todos los estudiantes de la tecnicatura"
print(miVariable)
miVariable = 3.5 
print(miVariable)
x = 10
y = 2
z = x + y
print(id(x))

# Las literales se escriben x056
print(id(z))
print(id(y))

# Tipos de datos

x = 10
print(x)
print(type(x))
x = 14.5
print(x)
print(type(x))
x = "Hola alumnos"
print(x)
print(type(x))
x = True
print(x)
print(type(x))
x = False
print(x)
print(type(x))

# Manejo de cadenas

miGrupoFavorito = "Red hot chili peppers"
caracteristicas = "The best band"
print("Mi grupo favorito es: "+miGrupoFavorito+""+caracteristicas)

numero1 = 7
numero2 = 8
print(int(numero1) + int(numero2))

# Tipos booleanos (bool)

miBooleano = 3 > 4
print(miBooleano)

if miBooleano:
    print("El resultado es verdadero")
else:
    print("El resultado es falso")

# Procesar entrada del usuario
# Función input
resultado = input("Ingrese un valor")
print("El resultado es: ",resultado)

# Conversión del dato de entrada
numero1 = int(input("Escribe el primer número"))
numero2 = int(input("Escribe el segundo número"))
resultado = numero1 + numero2

print("El resultado de la suma es: ",resultado)