'use strict'


function main() {

    let userString = document.getElementById('user-string').value
    console.log(userString);

    document.getElementById('respuesta14').innerHTML = mayusMinus(userString);
    console.log(mayusMinus(userString))

}


function mayusMinus(string){

    let mensaje = "";

    if (string === string.toUpperCase()){

        mensaje = "Tu cadena de texto esta en MAYUSCULAS";
    } else if (string === string.toLowerCase()){

        mensaje = "Tu cadena de texto esta en minúsculas";

    } else {

        mensaje = "Tu cadena de texto contiene MAYUSCULAS y minúsculas";

    }

    return mensaje;


    

}


