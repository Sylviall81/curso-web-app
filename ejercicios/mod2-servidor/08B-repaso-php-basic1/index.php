<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP básico</title>
</head>

<body>
    <a href="https://www.w3schools.com/php/default.asp" target="_blank">
        <h1>PHP básico, primera parte</h1>
    </a>

    <a href="https://www.w3schools.com/php/php_syntax.asp" target="_blank">
        <h2>Sintaxis básica</h2>
    </a>
    <ol>
        <li>Un script en PHP comienza con <strong>
                < ? php</strong> y termina con <strong>? ></strong></li>
        <li>La extensión de un archivo es <strong>.php</strong></li>
        <li>Cada declaración termina con <strong>;</strong></li>
        <li>Las páginas de PHP contienen HTML con código incrustado, eso quiere decir que un mismo archivo podrás combinar las diferentes sintaxis, solo acuérdate que cuando empieces a escribir código PHP tendrás que abrir los scripts, tal como indica en el paso 1.</li>
    </ol>

    <a href="https://www.w3schools.com/php/php_variables.asp" target="_blank">
        <h2>Variables</h2>
    </a>
    <p>Una variable es un espacio almacenado en el programa que contiene un valor. Se puede modificar su valor. Reglas de una variable en php:</p>
    <ol>
        <li>Empieza con el signo <strong>$</strong></li>
        <li>Puede empezar con una letra o un guión bajo, nunca con un número.</li>
        <li>Puede contener solo caracteres alfanuméricos y guión bajo.</li>
        <li>Distingue mayúsculas y minúsculas.</li>
    </ol>

    <a href="https://www.w3schools.com/php/php_constants.asp" target="_blank">
        <h2>Constantes</h2>
    </a>
    <p>Una constante al igual que una variable también es un espacio almacenado en el programa, que contiene un valor. Se diferencia de la variable porque no se puede modificar su valor durante la ejecución del script. Características:</p>
    <ol>
        <li>El alcance de la constante es global.</li>
        <li>La manera de definir una constante dentro de una clase es diferente que hacerlo en un script.</li>
        <li>En script: <strong>define('NOMBREDELACONSTANTE', 'valor-de-la-constante');</strong></li>
        <li>En clase: <strong>const NOMBREDELACONSTANTE = 'valor-de-la-constante';</strong></li>
        <li>Por convención los identificadores de las constantes siempre se declaran en mayúsculas aunque reconozca minúsculas.</li>
    </ol>

    <a href="https://www.w3schools.com/php/php_datatypes.asp" target="_blank">
        <h2>Tipos de datos</h2>
    </a>
    <ol>
        <li><strong>String: </strong>es una secuencia de caracteres, usa comillas.</li>
        <li><strong>Integer: </strong>número no decimal, puede ser negativo o positivo.</li>
        <li><strong>Float or Double: </strong>número decimal.</li>
        <li><strong>Boolean: </strong>contiene dos estados, verdadero o falso (true / false).</li>
        <li><strong>Array: </strong>es el conjunto de múltiples valores dentro de una sola variable, existen 3 tipos, arrays simples o indexados, arrays asociativos con llave=>valor y arrays multidimensionales (arrays que contienen otros arrays).</li>
        <li><strong>Object: </strong>es una instancia de una clase.</li>
        <li><strong>NULL: </strong>no tiene ningún valor.</li>
    </ol>

    <a href="https://www.w3schools.com/php/php_echo_print.asp" target="_blank">
        <h2>Imprimir en pantalla</h2>
    </a>
    <ol>
        <li><strong>Echo.</strong></li>
        <li><strong>Print.</strong></li>
        <li>Existen más opciones para imprimir en pantalla.</li>
    </ol>

    <a href="https://www.w3schools.com/php/php_ref_overview.asp" target="_blank">
        <h2>Built-in functions</h2>
    </a>
    <ol>
        <li>PHP tiene más de 1000 funciones propias.</li>
        <li>Son aquellas funciones que ya están preparadas y se utilizan para un propósito específico.</li>
        <li>La sintaxis consiste en el nombre de la función, seguida por paréntesis y dentro de ellos, el tipo de dato en el cual se aplicará la función.</li>
        <p>Ejemplo: la función <em>strlen</em> devuelve la longitud de caracteres de un string.</p>
        <p><strong>strlen('hola')</strong> - su resultado será <strong>4</strong></p>
        <li>Las funciones están categorizadas, así que una función que sirva para un string, podría no servir para un array.</li>
    </ol>

    <a href="https://www.php.net/manual/es/intro-whatis.php" target="_blank">
        <h2>Documentación oficial de PHP</h2>
    </a>
    <ol>
        <li>Aquí encontrarás todo lo que necesitas para conocer a fondo PHP.</li>
        <li>Es una de las documentaciones más completas, para un lenguaje de programación.</li>
    </ol>
    
    <h2>Ejercicios</h2>
    <h3>Básicos</h3>
    <ul>
        <li>Clonar este repo de php dentro de tu carpeta htdocs de xampp o mamp. No te olvides de encender el servidor.</li>
        <li><strong>Ejercicio 1:</strong> Crear una variable por cada tipo de dato (excepto objeto).</li>
        <li><strong>Ejercicio 2:</strong> Imprimir las variables en pantalla (Averigua cómo imprimir el valor booleano (que imprima true o false), un array y un valor nulo (que imprima NULL).</li>
    </ul>
    <h4><em>Resultados de ejercicios de tipo básicos:</em></h4>

    <?php
    //BÁSICOS
    //Ejercicio 1 -> Crear una variable por cada tipo de dato (excepto objeto).

    $string = 'Hola';
    //Continúa escribiendo tu código aquí...
    $varInteger = 96;
    $varFloat = 96.5;
    $varBoolean = true;
    $arrMyColors =  array("Blue","Red","Purple"); 
    $varNull = null;

    //Ejercicio 2 -> Imprimir las variables en pantalla (Averigua cómo imprimir el valor booleano (que imprima true o false), un array y un valor nulo (que imprima NULL).

    echo 'Mi string es igual a ' . $string;
    //echo "Mi string es igual a {$string}"; 
    echo "<br>"; //Este código te ayudará para que tus impresiones no salgan todas en la misma línea y los resultados sean más legibles (es un break de HTML5) puedes usarlo cuando lo necesites.

    //Continúa escribiendo tu código aquí...
    echo 'My integer es equal to ' .$varInteger;
    echo "<br>";
    echo 'My Float es equal to ' .$varFloat;
    echo "<br>";
    echo 'My Boolean es equal to ' .(boolval($varBoolean) ? 'true' : 'false')."\n";
    echo "<br>";
    echo 'My Array items are ' .$arrMyColors[0]. ",".$arrMyColors[1].".$arrMyColors[2].";
    echo "<br>";
    echo "My array is :   usando print_r():" ;
    echo "<br>";
    echo "My array is equal to " .print_r($arrMyColors); //no entiendo xq me sale aqui equal to 1
    echo "<br>";
    echo "usando var_export():";
    echo "My array es equal to " .var_export($arrMyColors);
    echo "<br>";
    echo "usando json_encode():";
    echo "My Array is equal to: " .json_encode ($arrMyColors);
    echo "<br>";
    echo 'My Null es equal to: ' .gettype($varNull);
    
    ?>
    <a href="https://www.w3schools.com/php/php_string.asp" target="_blank">
        <h3>De tipo Strings</h3>
    </a>
    
    <ul>
        <li><strong>Ejercicio 3:</strong> Crea una variable de tipo string cuyo valor sea 'Hola Mundo' e imprime en pantalla.</li>
        <li><strong>Ejercicio 4:</strong> Convierte todos los caracteres del string a mayúsculas e imprimir en pantalla, sin modificar la variable original.</li>
        <li><strong>Ejercicio 5:</strong> Imprime en pantalla la longitud de la variable tipo string.</li>
        <li><strong>Ejercicio 6:</strong> Imprime en pantalla la cantidad de palabras de la variable tipo string.</li>
        <li><strong>Ejercicio 7:</strong> Cambia a orden inverso los caracteres de la variable string e imprime en pantalla, sin modificar la variable original.</li>
        <li><strong>Ejercicio 8:</strong> Reemplaza la palabra 'Hola' de tu variable original a 'Holi' e imprime en pantalla.</li>
        <li><strong>Ejercicio 9:</strong> Crea una nueva variable con el valor de 'Comenzamos con PHP' e imprime la concatenación de tu variable inicial y ésta segunda.</li>
        <li><strong>Ejercicio 10:</strong> Crea una constante con tu nombre e imprime en pantalla.</li>
    </ul>
    <h4><em>Resultados de ejercicios de tipo strings:</em></h4>

    <?php
    //EJERCICIOS TIPO DE DATOS STRINGS
    //Ejercicio 3 -> Crea una variable de tipo string cuyo valor sea 'Hola Mundo' e imprime en pantalla.
   //Escribe tu código aquí...
    $varSaludar = "Hola Mundo!";
    echo $varSaludar;
    echo "<br>";

    //Ejercicio 4 -> Convierte todos los caracteres del string a mayúsculas e imprimir en pantalla, sin modificar la variable original.
    $varSaludoCaps = strtoupper ($varSaludar);
    echo $varSaludoCaps;
    echo "<br>";

    //Ejercicio 5 -> Imprime en pantalla la longitud de la variable tipo string.
    echo strlen($varSaludar);
    echo "<br>";
    
    //Ejercicio 6 -> Imprime en pantalla la cantidad de palabras de la variable tipo string.
    echo str_word_count($varSaludar);
    echo "<br>";
    
    //Ejercicio 7 -> Cambia a orden inverso los caracteres de la variable string e imprime en pantalla, sin modificar la variable original.
    echo strrev($varSaludar);
    echo "<br>";

    //Ejercicio 8 -> Reemplaza la palabra 'Hola' de tu variable original a 'Holi' e imprime en pantalla.
    echo $newWord = str_replace("Hola","Holis", $varSaludar);
    echo "<br>";
    
    //Ejercicio 9 -> Crea una nueva variable con el valor de 'Comenzamos con PHP' e imprime la concatenación de tu variable inicial y ésta segunda. 
   $varNew = "\nComenzamos con PHP";

   echo $varSaludar.$varNew;
   $concat = "{$varSaludar} {$varNew}";
   echo $concat;
   echo "<br>";
    
    //Ejercicio 10 -> Crea una constante con tu nombre e imprime en pantalla.
    define('MI_NOMBRE', 'Sylvia');
    echo MI_NOMBRE;
    
    ?>

    <a href="https://www.w3schools.com/php/php_numbers.asp" target="_blank">
        <h3>De tipo Integer y Double</h3>
    </a>
    
    <ul>
        <li><strong>Ejercicio 11:</strong> Declara dos variables y dale un valor de tipo integer e imprime ambas en pantalla.</li>
        <li><strong>Ejercicio 12:</strong> Suma ambas variables de tipo integer e imprime en pantalla.</li>
        <li><strong>Ejercicio 13:</strong> Resta ambas variables e imprime en pantalla.</li>
        <li><strong>Ejercicio 14:</strong> Multiplica ambas variables e imprime en pantalla.</li>
        <li><strong>Ejercicio 15:</strong> Divide ambas variables e imprime en pantalla.</li>
        <li><strong>Ejercicio 16:</strong> Calcula el módulo de ambas variables e imprime en pantalla.</li>
        <li><strong>Ejercicio 17:</strong> Declara dos variables y dale un valor de tipo double e imprime ambas en pantalla.</li>
        <li><strong>Ejercicio 18:</strong> Repite los pasos del 2 al 6 pero para las variables de tipo double e imprime en pantalla.</li>
        <li><strong>Ejercicio 19:</strong> Declara una variable de tipo integer con un valor negativo y cambia con una función propia de php al valor positivo e imprime en pantalla.</li>
        <li><strong>Ejercicio 20:</strong> Declara una variable de tipo double y redondea su valor, imprime en pantalla.</li>
        <li><strong>Ejercicio 21:</strong> Obtén un número aleatorio del 1 al 100 e imprime en pantalla.</li>
    </ul>
    <h4><em>Resultados de ejercicios de tipo integer y double:</em></h4>

    <?php
    //EJERCICIOS TIPO DE DATOS INTEGER Y DOUBLE
    //Ejercicio 11 -> declara dos variables y dale un valor de tipo integer e imprime ambas en pantalla.

    $myNum1 = 33;
    $myNum2 = 8;
    echo "Mis numeros enteros son: " .$myNum1. "\n y \n" .$myNum2;
    

    //Ejercicio 12 -> suma ambas variables de tipo integer e imprime en pantalla.

    $varSum = $myNum1+$myNum2;
    echo "<br>";
    echo "La suma de ambos enteros es:\n" .$varSum;
    //Ejercicio 13 -> resta ambas variables de tipo integer e imprime en pantalla.
    $varMinus = $myNum1-$myNum2;
    echo "<br>";
    echo "La resta de ambos enteros es:\n" .$varMinus;

    //Ejercicio 14 -> multiplica ambas variables de tipo integer e imprime en pantalla.
    $varProducto = $myNum1*$myNum2;
    echo "<br>";
    echo "El producto de ambos enteros es:\n" .$varProducto;

    //Ejercicio 15 -> divide ambas variables de tipo integer e imprime en pantalla.
    $varDiv = $myNum1/$myNum2;
    echo "<br>";
    echo "La division de ambos enteros es:\n" .$varDiv;
    
    //Ejercicio 16 -> calcula el módulo de ambas variables de tipo integer e imprime en pantalla.

    $varModulo = $myNum1%$myNum2;
    echo "<br>";
    echo "El modulo es:\n" .$varModulo;
    echo "<br>";

    //Ejercicio 17 -> declara dos variables y dale un valor de tipo double e imprime ambas en pantalla.
    $myFloat1 = 3.14;
    $myFloat2 = 9.99;
    echo "Mis numeros floats son: " .$myFloat1. "\n y \n" .$myFloat2;
    echo "<br>";
    //Ejercicio 18 -> repite los pasos del 2 al 6 pero para las variables de tipo double e imprime en pantalla.

    echo "la suma de los num decimales es: \n " .$varSum = $myFloat1+$myFloat2;
    echo "<br>";
    echo "la resta de los num decimales es: \n " .$varMinus = $myFloat1-$myFloat2;
    echo "<br>";
    echo "El producto de los num decimales es: \n " .$varProduct = $myFloat1*$myFloat2;
    echo "<br>";
    echo "La division de los num decimales es: \n " .$varDiv = $myFloat1/$myFloat2;
    echo "<br>";
    echo "El modulo de los num decimales es: \n " .$varModulo = $myFloat1*$myFloat2;
    echo "<br>";
    //Ejercicio 19 -> declara una variable de tipo integer con un valor negativo y cambia con una función propia de php al valor positivo e imprime en pantalla.

    $myNegativeInt = -25;
    echo "el valor absoluto del entero negativo es \n" .abs($myNegativeInt);
    echo "<br>";


    //Ejercicio 20 -> Declara una variable de tipo double y redondea su valor, imprime en pantalla.

    $myFloatNum = 3.14;
    echo "el valor redondeado de mi variable 3,14 es:\n" .round($myFloatNum);
    echo "<br>";


    //Ejercicio 21 -> obtén un número aleatorio del 1 al 100 e imprime en pantalla.

    $randomNum = rand(1, 100);
    echo "Mi número random del 1 al 100 es \n" .$randomNum;

    ?>

    <a href="https://www.w3schools.com/php/php_arrays.asp" target="_blank">
        <h3>De tipo Array</h3>
    </a>
    
    <ul>
        <li><strong>Ejercicio 22:</strong> Declara un array con datos de tipo string e imprime en pantalla.</li>
        <li><strong>Ejercicio 23:</strong> Obtén el largo del array e imprime en pantalla.</li>
        <li><strong>Ejercicio 24:</strong> Agrega un valor tipo string al array que creaste anteriormente e imprime en pantalla.</li>
        <li><strong>Ejercicio 25:</strong> Ahora agrega 2 elementos más a tu array e imprime en pantalla.</li>
        <li><strong>Ejercicio 26:</strong> Crea un nuevo array y concaténalo con el anterior e imprime en pantalla.</li>
    </ul>
    <h4><em>Resultados de ejercicios de tipo array:</em></h4>

    <?php
    //EJERCICIOS TIPO DE DATOS ARRAY
    //Ejercicio 22 -> declara un array con datos de tipo string e imprime en pantalla.
    $arrShoppingList =  array("Milk","Bread","Bananas","Cheese","Chocolate");
    echo "My array shopping list es: \n" .json_encode ($arrShoppingList);
    //Ejercicio 23 -> obtén el largo del array e imprime en pantalla.
    echo "</br>";
    echo "El largo de mi array es (sizeof()): \n" .sizeof($arrShoppingList);
    echo "</br>";
    echo "El largo de mi array es (count()): \n" .count($arrShoppingList);
    echo "</br>";
    //Ejercicio 24 -> agrega un valor tipo string al array que creaste anteriormente e imprime en pantalla.
    $newItem = "Coffee";
    echo "el nuevo item de mi array ShoppingList es \n".$newItem;
    $arrShoppingList[]= $newItem;
    echo "</br>";
    echo "My updated shoppingList is equal to: " .json_encode ($arrShoppingList);
    echo "</br>";
    array_push($arrShoppingList,"Coke","Lettuce");
    echo "My (again)updated shoppingList is equal to: " .json_encode ($arrShoppingList);
    $arrVeggieList =  array("Aubergine","Cucumber","Green Pepper","Spinach");
    echo "</br>";
    array_push($arrShoppingList,$arrVeggieList);
    echo " La union de mis dos arrays: ShoppingList y VeggieList es:" .json_encode ($arrShoppingList);
    $mergedArray = array_merge($arrShoppingList,$arrVeggieList);
    echo "</br>";
    echo $mergedArray;
    ?>
