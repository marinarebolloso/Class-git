edad = int(input("Ingrese su edad"))
mensaje = None
if 0 <= edad < 10:  #sintaxis simplificada
    mensaje = "La infancia es increíble y bella"
elif 11 <= edad < 19:
    mensaje = "Adolescencia: tienes muchos cambios y estudio por delante"
elif 20 <= edad < 29:
    mensaje = "Juventud: amor y comienzo del trabajo"
elif 30 <= edad < 60:
    mensaje = "Adultez: etapa del desarrollo más larga, estabilidad emocional y desarrollo personal. Importante desarrollar hábitos saludables."
elif 61 <= edad < 110:
    mensaje = "Tercera edad: envejecimiento como proceso gradual y esperable de deterioro corporal y/o psíquico"
else:
    mensaje = "Error, edad mal ingresada"

print(f"{edad},{mensaje}")
