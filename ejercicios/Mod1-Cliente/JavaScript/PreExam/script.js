const arrayItems = [];



function main(num) {

 

    let userItem = document.getElementById('user-item').value.toLowerCase();
    console.log(userItem);
    

    switch (num) {

        //Añadir Item
        case 1:

        if (userItem === "" ){
            alert("no pudes insertar un elemento vacio en la lista")
        } else {
            addItem(userItem);
            clearInput('user-item')}

            break;

            //Borrar Item
        case 2:

        if (userItem === "" ){
            alert("escribe un elemento para poder borrarlo")
        } else {
            eraseItem(userItem);

        }

            break;

            //Escoger Item
        default:
            pickItem();

    }
}
















function addItem(item) {

    arrayItems.push(item);
    console.log(arrayItems);

    let fullList = document.getElementById('ordered-list');
    let listItem = document.createElement('li');
    listItem.innerHTML = item;
    //listItem.innerHTML = arrayItems[arrayItems.length-1]
    fullList.appendChild(listItem);



}


function eraseItem(item) {

    

    let itemIndex = arrayItems.indexOf(item);
    console.log(itemIndex);

    if (itemIndex !== -1) {

        let deletConfirmation = confirm(`Estas a punto de eliminar el elemento ${item} de la lista ¿Estas segur@ que quieres continuar?`)

        if (deletConfirmation) {
            let liElement = document.getElementsByTagName('li')[itemIndex]; // Obtener el elemento <li> que queremos eliminar
            liElement.remove(); // Eliminar el elemento del DOM
            arrayItems.splice(itemIndex, 1);
            console.log(arrayItems)
            clearInput('user-item')
        } else {
            clearInput('user-item')
        }
    } else {
        let addNew = confirm(`El elemento ${item} no existe en la lista.¿Deseas añadirlo?`);

        if (addNew) {
            addItem(item);
            console.log(arrayItems);
            clearInput('user-item')
        } else {
            clearInput('user-item')
        }

    }

}

function pickItem() {

    let userNumber = Number(document.getElementById('user-number').value)

    if (userNumber <= 0 || userNumber > arrayItems.length) {

        if (arrayItems.length == 0) {
            alert("Por favor, añade elementos a la lista")
            
        } else {

            alert("Lo sentimos ese número no se encuentra en la lista, intenta de nuevo. Escoje un número del 1 al " + arrayItems.length)
            clearInput('user-number');
            clearInput('respuesta');
       
        }

    } else {

        document.getElementById('respuesta').innerHTML = 'has escogido:' + arrayItems[userNumber - 1]
        clearInput('user-number');
        clearInput('respuesta');
    }

}


function clearInput(id) {
    document.getElementById(id).value = " ";
}