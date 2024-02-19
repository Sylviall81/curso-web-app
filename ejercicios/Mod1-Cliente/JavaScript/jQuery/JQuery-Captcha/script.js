$('#submit').on({
    click: function () {
        generarCaptcha();
        
    }
})

function generarCaptcha(){


    $('section').append('<div id="modal-captcha" class="container"><p>Por favor, inserta el resultado de 5+9 para verificar que eres humano</p><input id="captcha-answer" type = "number"></br> <button onclick = "clickCaptcha()" id="captcha-button" class="button small" >Enviar</button></div>')
    $('#form').hide();
}


function clickCaptcha() {
        let userAnswer = Number($('#captcha-answer').val());
        //console.log(userAnswer)
        comprobarCaptcha(userAnswer)
        }	
    


function comprobarCaptcha(value){


    const rightAnswer = 14;

    value !== rightAnswer ? (

    $('#modal-captcha > p').html('Lo sentimos esta no es la repuesta correcta, vuelve al formulario e intenta de nuevo'),
    $('#modal-captcha > button').hide(),
    $('#modal-captcha > input').hide(),
    $('#modal-captcha').append('<button onclick = hideModal()>Volver</button>')

        
    ) : (


        $('#modal-captcha > p').html('Bienvenid@, la respuesta es correcta, puedes iniciar sesión'),
        $('#modal-captcha > input').hide(),
        $('#modal-captcha > button').text('Login'),
        $('#modal-captcha > button').attr('onclick', 'inicioSesion()')
        
    )

}

function hideModal(){

    $('#modal-captcha').hide()
    $('#form').show()
}

function inicioSesion(){
    $('.container').hide();
    $('#logged').show()

 }