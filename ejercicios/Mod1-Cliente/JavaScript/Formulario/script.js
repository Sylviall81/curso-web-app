
function validaImprime(){


    //Salvo los datos de los input

    let fullForm = document.getElementById("formulario")
  
    // Obtener valores de los campos del formulario
    const nombre = document.getElementById("name").value;
    const apellido1 = document.getElementById("last-name1").value;
    const apellido2 = document.getElementById("last-name2").value;
    const telefono = document.getElementById("phone").value;
    const fechaNacimiento = document.getElementById("birthday").value;
    const email = document.getElementById("email").value;
    const turno = document.querySelector('input[name="turno"]:checked');
    console.log(turno)
    const curso = document.getElementById("curso").value;
    const privacidadAceptada = document.getElementById("privacy").checked;

    console.table(
        nombre+apellido1+apellido2+telefono+fechaNacimiento+email+turno+curso+privacidadAceptada);

        if (telefono.length < 9 || telefono.length > 9 || isNaN(telefono)){

            alert("Error el campo telefono debe ser un número de 9 cifras")
            return false
        }

        if (!turno) {

            alert('Por favor selecciona un turno')
            return false;
    
        }

        if (!privacidadAceptada) {

            alert('Error: Debe aceptar la cláusula de privacidad')
            return false;
      
            //document.getElementById("form-data-container").innerHTML = "<p id='error-message'>Debe aceptar la cláusula de privacidad</p>";
          
        }

        


       


        document.getElementById("form-data-container").innerHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Primer apellido: ${apellido1}</p>
        <p>Segundo apellido: ${apellido2}</p>
        <p>Teléfono: ${telefono}</p>
        <p>Fecha de nacimiento: ${fechaNacimiento}</p>
        <p>Email: ${email}</p>
        <p>Turno: ${turno.value}</p>
        <p>Curso: ${curso}</p>
      `;





}






 
  
  
   
  