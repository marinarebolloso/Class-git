# class-git

### HOY VAMOS A HACER ACTIVIDAD EN PYTHON EN UN DÍA COMO PROGRAMADORES:
<p>

</p>
1- Abrir la terminal de Git Bash o terminal en Linux, debe ser como administrador en Window.
2- Creamos una carpeta o directorio: 

```
mkdir python-final
```

3- Entramos en ella: 
```
cd python-final
```
4- Iniciamos el repositorio:
```
git init
```
5- Creamos un archivo:
```
touch finales.py
```
6- Abrimos VSC code 

7- En terminal ingresamos el comando para saber la versión de Python que tenemos instalada:
```
python -V

python3 -V
```
8- Creamos el entorno virtual en Python:
```
python3 -m venv venv #Creamos el entorno virtual
```
9- Activamos el entorno virtual:
```
source venv/bin/activate **#Activamos el entorno virtual en Linux**
```
```
venv/scripts/activate **#En windows**
```
10- Hacemos actualización del pip de Python
```
python3 -m pip install --upgrade pip **#Actualizamos el pip**
```
##### 11- Investigar ¿Qué es el pip y porque lo actualizamos?

Pip es una herramienta escrita en Python para facilitar la descarga e instalación de paquetes del lenguaje que se encuentren en el Python Package Index (PyPI). Podría suponerse que las siglas provienen de Python Install Package, aunque no hay certeza de esto. Corre en las principales plataformas: Microsoft Windows, Linux y OS X; en CPython 2.6+, 3.x y PyPy. Es importante mantenerlo actualizado porque nos ayuda al mantenimiento de la aplicación. Mejoras, corrección de errores, nuevas funcionalidades, actualizar paquetes de terceros, entre otros son los beneficios de su actualización. 

Fuentes: https://recursospython.com/guias-y-manuales/instalacion-y-utilizacion-de-pip-en-windows-linux-y-os-x/
https://j2logo.com/actualizar-todos-los-paquetes-con-pip-a-la-ultima-version/

12- Hacer al primer commit de este trabajo y unirlo al repositorio remoto.

13- Enviar el enlace del repositorio remoto donde tiene que tener un README.md con todos los detalles de lo que les fui mostrando en comandos, y las respuesta del punto 11 de más arriba.
