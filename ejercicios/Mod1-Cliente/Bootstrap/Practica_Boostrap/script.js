


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


  
  function submitForm(){

    const rightCaptcha = 14;
    const rightEmail = 'fake@mail.com';
    const rightPwd = 12345;


    let email = $('#email').val();
    let pwd = Number($('#pwd').val());
    let captcha = $('#captcha').val();

    console.log('verifico:', email, captcha, pwd)


    if (captcha == rightCaptcha && email == rightEmail && pwd == rightPwd) {
            
            $('#myModal').hide();
    
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
    


    // if (captcha != rightCaptcha){
    //     $('#myModal').append('<div class="alert alert-danger alert-dismissible">'+
    //     '<button type="button" class="close" data-dismiss="alert">&times;</button>'+
    //     '<strong>Error</strong> El resultado de la suma no es correcto, vuelve a intentarlo.</div>'
    //     )
    //     $('#myModal').modal('show');

    // }else if( email != rightEmail || pwd != rightPwd){

    //     $('#myModal').append('<div class="alert alert-danger alert-dismissible">'+
    //     '<button type="button" class="close" data-dismiss="alert">&times;</button>'+
    //     '<strong>Error</strong> El usuario o contraseña son incorrectos</div>'
    //     )
    //     $('#myModal').modal('show');


    // } else {
    //     $('#myModal').hide()
    // }

    

  }


