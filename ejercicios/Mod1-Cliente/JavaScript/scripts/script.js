'use strict'



//Anexo accesorio para limpiar: 
function clean(string){
    document.getElementById(string).innerHTML = ''; 

}

//1er ejercicio 

function helloWorld() {

    alert('Hola Mundo!');
    alert("Soy el primer script");

}



//Ejercicio2: PROMPT y variables


function sumar(num1, num2) {
    let resultado = num1 + num2;
    return resultado;
}


function askNumber() {

    let userNum1 = Number(prompt("Indica un numero"));
    console.log(userNum1, typeof (userNum1));
    /* un prompt inicialmente solo te trae un string
    hay que convertirlo numero si quieres trabajar con el 
    Number o parseInt o parseFloat*/

    let userNum2 = Number(prompt("Indica un numero"));

    return alert(`La suma de ${userNum1} y ${userNum2} es: ${sumar(userNum1, userNum2)}`);

}



//ejercicio 3 String

function showString() {

    alert(`<javascript> \n \t Hola Mundo! \n\t Que fácil es incluir 'comillas simples' \n \t y "comillas dobles"`);
}

//ejercicio 4: Arrays

function showMonth() {
    //const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    // for (let i = 0; i < meses.length; i++) {

    //     // alert(meses[i] + " es el mes número " + ([i + 1]) + " del año")
    //     document.getElementById("meses").innerHTML = "<li>"+meses[i]+"</li>"
    // }
    //hacen los mismo este caso el for y el forEach

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let listaMeses = '';

    meses.forEach(item => {

        console.log(item);
        listaMeses += `<li>${item}</li>\n`; //OJO con el += xq si no te lo MACHACA necesitas el += para el acumulador!!!!
        //     alert(item)    
    })

    
    document.getElementById("meses").innerHTML = "<p>Meses del año</p>\n" + listaMeses +"<button onclick=clean('meses')>Limpiar</button>";
   


}



//Ejercicio 5 Condicionales: calificaciones a Letra
function numberToLiteralGrade(num) {

    let mensaje = '';
    console.log(num)
    if (num > 20 || num < 0) {

        mensaje = "Ingresa un número válido entre 1 y 0"

    } else {

        if (num <= 8 && num >= 0) {
            

        } else {

            if (num === 20 || num === 19) {
                mensaje = "Tu calificación es A"
                console.log(mensaje)

            } else {

                if (num < 19 && num >= 16) {
                    mensaje = "Tu calificación es B"
                    console.log(mensaje)
                } else {

                    if (num >= 12 && num <= 15) {
                        mensaje = "Tu calificación es C"
                        console.log(mensaje)
                    } else {
                        mensaje = "Tu calificación es D"
                        console.log(mensaje)
                    }
                }
            }
        }
    }

    return mensaje;

}

function mainGrade() {
    let userGrade = Number(prompt("Dime tu puntuación del 0 a 20 y te devolveré tu calificación en letra"))

    alert(`la puntuación introducida es:${userGrade} y` + numberToLiteralGrade(userGrade));
    document.getElementById("respuesta6").innerHTML = `la puntuación introducida es:${userGrade} y ` + numberToLiteralGrade(userGrade)

}


function numberToLiteralGradeSwitch(num) {
    let mensaje = '';
    console.log(num);

    switch (true) {
        case (num > 20 || num < 0):
            mensaje = "Ingresa un número válido entre 1 y 20";
            break;

        case (num <= 8):
            mensaje = "Tu calificación es E";
            break;

        case (num === 19 || num === 20):
            mensaje = "Tu calificación es A";
            break;

        case (num >= 16 && num < 19):
            mensaje = "Tu calificación es B";
            break;

        case (num >= 12 && num < 16):
            mensaje = "Tu calificación es C";
            break;

        default:
            mensaje = "Tu calificación es D";
    }

    console.log(mensaje);
    return mensaje;
}



function mainGradeSwitch() {
    let userGrade = Number(prompt("Dime tu puntuación del 0 a 20 y te devolveré tu calificación en letra"))

    alert(`la puntuación introducida es:${userGrade} ` + numberToLiteralGradeSwitch(userGrade));
    document.getElementById("respuesta6B").innerHTML = `la puntuación introducida es:${userGrade}  ` + numberToLiteralGradeSwitch(userGrade)

}

//Ejercicio 6 Entradas de cine

function mainMovie() {

    let ticketQtity = Number(prompt("¿Cuantas entradas se van a vender?"));
    let ticketPrice = Number(prompt("¿Cuál es el precio por entrada?"));
    let descuento = 0;
    let discountPrice = 0;
    let totalPay = 0;
    let porciento= 0;


    console.log(ticketQtity, typeof (ticketQtity));
    console.log(ticketPrice, typeof (ticketPrice))


    if (ticketQtity === 1){
      
        descuento = 0;
        totalPay = ticketPrice

    } else if (ticketQtity >= 5) {

        porciento= 25;
        descuento = ticketPrice * 0.25; //desc 25%

    } else if (ticketQtity == 4) {
        descuento = ticketPrice * 0.20;
        porciento= 20;

    } else if (ticketQtity == 3) {
        descuento = ticketPrice * 0.15;
        porciento= 15;

    } else if (ticketQtity == 2) {
        descuento = ticketPrice * 0.10;
        porciento= 10;

    } 

    discountPrice = (ticketPrice - descuento).toFixed(2)
    totalPay = (ticketQtity * discountPrice).toFixed(2)

    let mensaje = `Ud. ha solicitado comprar ${ticketQtity} entradas por un precio de ${ticketPrice}€ por entrada.Para esta cantidad de entradas usted disfruta de un ${porciento}% de descuento y una reduccion de ${descuento}€ en el precio total, por lo que debe pagar ${totalPay}€`
    alert(mensaje)

}


function mainMovieSwitch() {
    let ticketQtity = Number(prompt("¿Cuantas entradas se van a vender?"));
    let ticketPrice = Number(prompt("¿Cuál es el precio por entrada?"));
    let descuento = 0;
    let discountPrice = 0;
    let totalPay = 0;
    let porciento = 0;

    console.log(ticketQtity, typeof(ticketQtity));
    console.log(ticketPrice, typeof(ticketPrice));

    switch (ticketQtity) {
        case 1:
            descuento = 0;
            totalPay = ticketPrice;
            break;
        case 2:
            descuento = ticketPrice * 0.10;
            porciento = 10;
            break;
        case 3:
            descuento = ticketPrice * 0.15;
            porciento = 15;
            break;
        case 4:
            descuento = ticketPrice * 0.20;
            porciento = 20;
            break;
        default:
            porciento = 25;
            descuento = ticketPrice * 0.25; //desc 25%
            break;
    }

    discountPrice = (ticketPrice - descuento).toFixed(2);
    totalPay = (ticketQtity * discountPrice).toFixed(2);

    let mensaje = `Ud. ha solicitado comprar ${ticketQtity} entradas por un precio de ${ticketPrice}€ por entrada. Para esta cantidad de entradas usted disfruta de un ${porciento}% de descuento y una reducción de ${descuento.toFixed(2)}€ en el precio total, por lo que debe pagar ${totalPay}€`;
    alert(mensaje);
}



//Ejercicio 7(Cine con input)ver script3
//Ejercicio 8 DNI carpeta aparte para entrega
//ejercicio9 se lo salto

//Ejercicio 10 calculo factorial

 function calcular(){

    let numUsuario = Number(document.getElementById('num-factor').value);
    console.log (numUsuario,typeof(numUsuario));
    console.log(calculoFactorial(numUsuario));

    let mensaje = `el factorial de ${numUsuario} es `+ calculoFactorial(numUsuario);

    document.getElementById('respuesta10').innerHTML = mensaje

 }


function calculoFactorial(num){

    let factorialTotal = 0;
    let numX = num

    for (let i=1; i < num; i++){

        console.log("Entrada i:",i)
        console.log("numX:",numX)

        factorialTotal = numX * i //14
        console.log("Ftotal",factorialTotal)
        numX = factorialTotal;
        console.log ('fin vuelta'+i, numX)
    }

    return numX

}


//decreciente y funciona
// function calculoFactorial(num){

//     let factorialTotal = 0;
//     let numX = num

//     for (let i=num; i > 1; i--){
//         console.log("Entrada i:",i)
//         console.log("numX:",numX)

//         factorialTotal = numX * i //14
//         console.log("Ftotal",factorialTotal)
//         numX = factorialTotal;
//         console.log ('fin vuelta'+i, numX)
//     }

//     return numX

// }


//EJERCICIO 12 for In y for OF meses

function muestraMeses(){ //for in recorre y te devulelve indice 

    let listaMeses = '';
    const arrayMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  

    for (let index in arrayMeses){
        listaMeses +=`<li>Mes ${Number(index)+1}:${arrayMeses[index]} </li>`
    }

    document.getElementById("meses-A").innerHTML = listaMeses+="<button onclick=clean('meses-A')>Limpiar</button>"

    

}

 //for of recorre los valores internos independiente de la posiscion pero no mete index
function muestraMesesAgain(){
    let nuevalistaMes = '';
    const arrayMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  

    for (let value of arrayMeses){
        nuevalistaMes +=`<li>Mes ${value} </li>`
    }

    document.getElementById("meses-B").innerHTML = nuevalistaMes+="<button onclick=clean('meses-B')>Limpiar</button>"

}



// let div = document.getElementById("div-ejercicio12")


//     var button = document.createElement("button");
//     button.onclick = function() {
//         calcularMayor();
//     };
//     button.innerText = "Dime el mayor"
//     button.style.backgroundColor = "purple";
//     inputsContainer.appendChild(button);
//     console.log(button)


//     let botonLimpiar = document.createElement('button');
//     botonLimpiar.innerText = "borrar"
//     botonLimpiar.onclick = function (){
//         clean("meses-A");
//     }
//     div.appendChild(botonLimpiar)


//Ejercicio 13

