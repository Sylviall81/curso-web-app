function main() {

    let userNum = Number(document.getElementById('user-number').value);
    console.log(userNum, typeof (userNum));

    if (userNum < 1 || userNum > 3) {

        mensaje = "por favor elige un número entre 1 y 3"
    } else {

        mensaje = "has elegido:" + pickListItem(userNum);
    }

    document.getElementById("respuesta").innerHTML = mensaje;

}

function pickListItem(num) {

    let userItem;
    let fullList;

    fullList = document.getElementsByTagName('li');
    console.log(fullList);

    userItem = fullList[num - 1].textContent


    return userItem

}