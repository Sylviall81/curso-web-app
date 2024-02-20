
$(function () {
    let grandPaDiv = $('#unico').children('div')
    console.log(grandPaDiv[0])
    grandPaDiv.css({
        'background-color': 'black',
        'border': '1px solid blue',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'width': '80vw',
        'height': '95vh',
        'display': 'flex'

    })

    let dadDiv = grandPaDiv.children();
    dadDiv.css({
        'background-color': 'gray',
        'width': '70%',
        'height': '75%',
        'border': '1px solid white',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center'
    })
    let childDiv = dadDiv.children()
    childDiv.css({
        'background-color': 'red',
        'width': '30%',
        'border': '1px solid green',
        'display': 'inline-block',
        'margin': '20px',
        'height': '40%'
    })
})