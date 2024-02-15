// 'use strict'


  
    function empieza(){

        numElementos = Number(document.getElementById("num-elementos").value);
        console.log(numElementos);
    

        crearInputs(numElementos);


    }



    function crearInputs(num) {
    
        var inputsContainer = document.getElementById("input-container");
        inputsContainer.innerHTML = ''; // Limpiar el contenedor antes de añadir nuevos inputs
    
        for (var i = 0; i < num; i++) {
            var input = document.createElement("input");
            input.type = "number";
            input.placeholder = "Ingrese un número";
            input.id = `element-${i}`
            inputsContainer.appendChild(input);
            console.log(input)
        }
    
        var button = document.createElement("button");
        button.onclick = function() {
            calcularMayor();
        };
        button.innerText = "Dime el mayor"
        button.style.backgroundColor = "purple";
        inputsContainer.appendChild(button);
        console.log(button)
        
        
    }



    




    function calcularMayor(){

        const numeros = [];
        let numMayor= 0;
        
    //aqui extraemos el valor de cada uno de los inputs
        for(i=0;i<numElementos;i++) {
            numeros[i]=Number(document.getElementById(`element-${i}`).value);
            console.log(numeros)
        }

        
        //aqui recorremos el array para comparar y sacar cual es el mayor
        for (i=0; i < numeros.length; i++) {

            if(numMayor < numeros[i]){
                numMayor = numeros[i];
                console.log(numMayor)
            }

        } 
        resultado = "el número mayor del conjunto es:"+ numMayor


        document.getElementById("respuesta11").innerHTML = resultado

    }



    
    
    
    
    
        // const arrayNum = [];
    // console.log(arrayNum, typeof (arrayNum));
    // console.log(arrayNum.length)
    // let i = 0;

    // if (arrayNum.length <= 0 ){
        
    //     for (i = 0 ; i > numElementos; i++) {
    //     let arrayItem = Number(document.getElementById(`element-${i}`).value);
    //     console.log(arrayItem);
    //     arrayNum.push(arrayItem);
    //     console.log(arrayNum)
    //  }

    // }



 




    // for (let i=1; i < array.length; i++){
    //     if(numMayor < array[i]){
    //         console.log(array[i])
    //         numMayor = array[i];
    //         console.log("vuelta"[i],numMayor)
    // }
    
    // let respuesta = `El número mayor es${numMayor}`;

    // return respuesta

    
    // }
    
    
