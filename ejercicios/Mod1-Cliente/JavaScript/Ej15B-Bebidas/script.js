function main() {

    let userItem = document.getElementById('user-string').value;
    console.log(userItem, typeof (userItem));

    addListItem(userItem)

}

function addListItem(string) {

    let fullList= document.getElementById('drink-list')
    console.log(fullList)

    let newItem = document.createElement('li');
    newItem.innerHTML = string;
    console.log(newItem)

    fullList.appendChild(newItem);

    console.log("resultado", newItem.innerHTML)
    
    

}


//con el bucle for

// function findListItem(num){

//     let userItem;
//     let fullList;

//     fullList = document.getElementsByTagName('li')
//     console.log(fullList)
    
//     // userItem = fullList
//     // console.log(userItem)

//     // return userItem;

//     for(let i=0; i < fullList.length; i++){
//         let item = fullList[i].innerHTML 
//         console.log(item)

//         // if (item.includes(num)){
//         //     userItem = item;
//         //     console.log(userItem)
//         // }

//         // return userItem;
//}
//     }


