
// $(document).ready(function(){

//     // Seleccionar el div abuelo
//     let children= $('#inner').children('div');
//     console.log('children',children);
//     let grandPaDiv = children[0];
//     console.log('grandPaDiv', grandPaDiv);

//     // Aplicar estilo al div abuelo
//     grandPaDiv.addClass('grid-grandpa');
//     grandPaDiv.css({
//                     'background-color': 'lightgray',
//                     'border' : '1px solid navy',
//                     'width': '75%'
//                     });

//     // Seleccionar el div padre
//     let fatherDiv = grandPaDiv.children('div')
//     // Aplicar estilo al div padre
//     fatherDiv.css('border', '1px solid black');

//     // Seleccionar los hijos (divs hijos)
//     let childDivs = fatherDiv.children();
//     // Aplicar estilo a los hijos (divs hijos)
//     childDivs.each(function(index) {
//         $(this).css('background-color', 'lightblue');
//         // Añadir un borde rojo al primer hijo (child1)
//         if (index === 0) {
//             $(this).css('border', '1px solid red');
//         }
//     });

// })


$(function(){
    let main = $('#unico').children('div')
    console.log(main[0])
    main.css({'background-color':'black',
                'width':'80%',
            'height':'80%'})
    let child = main.children();
    child.css('background-color','#CCC')
    let hermanos = child.children()
    hermanos.css({'background-color':'red',
    'width':'20%',
    'border' : '1px solid navy',
    'display' : 'inline-block',
    'margin' : '20px',
    'height':'20%'})
})