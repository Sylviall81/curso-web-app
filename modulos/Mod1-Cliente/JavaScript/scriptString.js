'use strict'


function main() {

    let userString = document.getElementById('user-string').value
    console.log(userString);

    document.getElementById('respuesta12B').innerHTML = splitString(userString)
    console.log(splitString(userString))

}


function splitString(string){
    let charList = "";

for (let i=0; i<string.length; i++){
        let char = string[i];
    // Esto tambien funciona: let char = string.charAt(i)
    console.log(char);

    charList += '<li>'+char+'</li>';
}

return charList

}


