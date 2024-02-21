


//ajustes Css con jQuery 
$('#welcome-header').css({
    'display' : 'flex',
    'align-items' : 'center',
    'justify-content' : 'center'

})




//gestion del modal y el captcha

$(document).ready(function(){

    $('#myModal').modal('show');

    $('#myModal').on('hidden.bs.modal',  function(){
        submitForm();
    });


  });

//   $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })


  
  function submitForm(){

    const rightCaptcha = 14;
    const rightEmail = 'fake@mail.com';
    const rightPwd = 12345;


    let email = $('#email').val();
    let pwd = Number($('#pwd').val());
    let captcha = $('#captcha').val();
    let storeLoginData= $('#agree').is(":checked"); //guarda el checked como true

    console.log('verifico:', email, captcha, pwd, storeLoginData)


    if (captcha == rightCaptcha && email == rightEmail && pwd == rightPwd) {
            
        if(storeLoginData){
            localStorage.setItem('user',email);

            $('#myModal').hide();
        }

           
    
     }else if( captcha != rightCaptcha){

            $('#modal-head').html('<div class="alert alert-danger alert-dismissible">'+
            '<button type="button" class="close" data-dismiss="alert">&times;</button>'+
            '<strong>Error</strong> El resultado de la operación no es correcto, vuelve a intentarlo</div>'
            )
            $('#myModal').show();
            $('#submit-button').on('click',function(){
                submitForm();

            })
    
        } else {

            $('#modal-head').html('<div class="alert alert-danger alert-dismissible">'+
            '<button type="button" class="close" data-dismiss="alert">&times;</button>'+
            '<strong>Error</strong> El usuario o contraseña son incorrectos</div>'
            )
            $('#myModal').show();
            $('#submit-button').on('click',function(){
                submitForm();
            })
          
            
        }
    

    }

    // Si no hay guardada variable local "Storage" 
    if (!localStorage.getItem('user'))
    // Mostrar modal
    $("#login").modal('show');
    // Cuando se oculta el modal, llamamos a la función de validación del formulario
    $("#login").on("hidden.bs.modal", function () {
        submitForm();
    });
   localStorage.clear();


