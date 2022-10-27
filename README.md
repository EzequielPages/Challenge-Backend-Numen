# Challenge-Backend-Numen

### Ejercicio 1
## Utilizando NodeJS y ExpressJS
1-	Crear un proyecto de NodeJS utilizando ExpressJS
2-	Instala Nodemon.
3-	Crea un servicio que retorne una cierta cantidad de números de la serie de Fibonacci.
4-	La cantidad de números a retornar debe ser enviada al servicio como parámetro. ¿Cúal crees que es el mejor tipo de parámetro? ¿Que verbo utilizar? 😉
5-	Sí al realizar la petición no se envía ningún parámetro, por defecto retornar los primeros 20 números de la serie.
6-	Si como parámetro no se envía un número, retornar un error (un mensaje de error) pero acompáñalo de un status code que creas que encaja con el mal envío del parámetro.


### Ejercicio 2

Asumiendo que queremos crear un backend para gestionar usuarios, y estos usuarios tienen solamente los siguientes atributos: ID, Nombre, Apellido, DNI.
Para este caso, queremos poder hacer operaciones CRUD (Create, Read, Update, Delete). No hace falta utilizar un motor de base de datos. Para realizar el ejercicio es necesario crear un array en nuestra aplicación de manera global y que nuestros servicios utilicen dicho array, el objetivo es modificar el array que está en memoria.
Puntos a tener en cuenta:
1-	Se debe crear un proyecto nuevo utilizando NodeJS y ExpressJS
2-	El ID no se puede repetir ya que es unívoco para cada elemento del array (puede ser un número incremental).
3-	Validar todos los posibles errores:
a.	Al crear un usuario todos los datos previamente mencionados son obligatorios.
b.	Al actualizar o eliminar un registro, se debe hacer por ID.
c.	Se debe contemplar en el servicio que retorna los usuarios, la posibilidad OPCIONAL de recibir un ID y retornar sólo el que coincida con ese parámetro o un error si ese ID no existiese en el array. (¿Qué tipo de parámetro crees que es el indicado para esto? y, ¿para actualizar y eliminar?)
d.	El servicio de consulta de usuario debe permitir filtrar por nombre y/o apellido.


### Realizado por:
- Ignacio Morales ( ignacioevil@gmail.com )
- Ezequiel Pagés ( ezepages333111@gmail.com )
