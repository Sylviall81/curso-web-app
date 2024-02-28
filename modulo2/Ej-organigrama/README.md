# Sistema de Login con Prueba de Humanidad :bust_in_silhouette:

Este sistema de login incluye una prueba para asegurar que el usuario es un humano y no un bot. Para ingresar, el usuario debe proporcionar el resultado correcto de una simple operación matemática.

## Cómo Funciona 🔄

1. **Inicio de Sesión** 🔑: El usuario introduce su nombre de usuario y contraseña.
2. **Prueba de Humanidad** 🧠: Se le pide al usuario que resuelva una operación matemática simple para verificar que es un humano.
3. **Validación del Resultado** ✔️: Si el resultado proporcionado es correcto, el usuario puede acceder al sistema. Si es incorrecto, se muestra un mensaje de error y se solicita nuevamente la respuesta.
4. **Acceso Denegado** 🚫: Si el usuario falla en proporcionar la respuesta correcta después de varios intentos, se le deniega el acceso.

## Ejemplo de Operación Matemática 🧮

Para demostrar que es un humano, el usuario debe resolver la siguiente operación: 5 + 9 = ?

+-----------------------------+
|        Inicio de Sesión     |
+-----------------------------+
             |
             V
+-----------------------------+
|    ¿Usuario y Contraseña    |
|        son válidos?         |
+-----------------------------+
             |
             V
+-----------------------------+
|     Prueba de Humanidad     |
+-----------------------------+
             |
             V
+-----------------------------+
|    ¿Respuesta Correcta?     |
+-----------------------------+
      |          |
      V          |
+-------------+  |
| Acceso     |   |
| Permitido?  |  |
+-------------+  |
                 |
                 V
+-----------------------------+
|   Mostrar Mensaje de Error  |
+-----------------------------+
             |
             V
+-----------------------------+
|     Volver a Prueba de      |
|         Humanidad           |
+-----------------------------+
