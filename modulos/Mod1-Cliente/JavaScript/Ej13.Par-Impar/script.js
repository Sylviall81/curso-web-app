
function main(){

    let userNum = Number(document.getElementById('user-number').value);
    console.log(userNum, typeof(userNum));
    
    let resultado = oddOrEven(userNum);
    console.log(resultado)

  if (userNum === 0){
    mensaje = "Por favor, introduce un número diferente de 0"

  } else  if (resultado && userNum != 0){
        mensaje = "El número que has introducido es PAR";
        
    }  else {
        mensaje = "El numero introducido es IMPAR"
    }


    alert(mensaje)
    document.getElementById("respuesta13").innerHTML = mensaje;


}


function oddOrEven(num){

    let even = false;

    if (num % 2 === 0){

        even = true;
        
    } else {
        even = false;
    }

    return even;
}