const arrayItems = [];









function addItem() {

    let userItem = document.getElementById('user-item').value;
    console.log(userItem);
    arrayItems.push(userItem.toLowerCase());
    console.log(arrayItems);

    let fullList = document.getElementById('ordered-list');
    let listItem = document.createElement('li');
    listItem.innerHTML = userItem;
    fullList.appendChild(listItem);

    clearInput('user-item')

}


function eraseItem() {

    let userItem = document.getElementById('user-item').value
    let itemIndex = arrayItems.indexOf(userItem.toLowerCase());
    console.log(itemIndex);

    if (itemIndex !== -1) {

        let deletConfirmation = confirm(`Estas a punto de eliminar el elemento ${userItem} de la lista ¿Estas segur@ que quieres continuar?`)
        
        if (deletConfirmation) {
            let liElement = document.getElementsByTagName('li')[itemIndex]; // Obtener el elemento <li> que queremos eliminar
            liElement.remove(); // Eliminar el elemento del DOM
            arrayItems.splice(itemIndex, 1);
            console.log(arrayItems)
            clearInput('user-item')
        } else{
            clearInput('user-item')
        }
    } else {
        let addNew = confirm(`El elemento ${userItem} no existe en la lista.¿Deseas añadirlo?`);

        if (addNew) {
            addItem();
            console.log(arrayItems);
        } else{
            clearInput('user-item')
        }

    }

}

function pickItem(){

    let userNumber = Number(document.getElementById('user-number').value)

    if( userNumber <= 0 || userNumber > arrayItems.length){
        
        if(arrayItems.length == 0){
            alert("Por favor, añade elementos a la lista")
        } else {

        alert("Lo sentimos ese número no se encuentra en la lista, intenta de nuevo. Escoje un número del 1 al "+arrayItems.length)
        }

    } else {

        document.getElementById('respuesta').innerHTML = 'has escogido:'+ arrayItems[userNumber-1]
        clearInput('user-number')
    }

}


function clearInput(id) {
    document.getElementById(id).value = "";
}