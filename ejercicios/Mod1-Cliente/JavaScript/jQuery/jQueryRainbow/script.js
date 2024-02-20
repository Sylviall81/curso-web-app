
$(document).ready(function() {
    $(".grid-item").each(function(indice, elemento) {
      // Creamos un array de colores para usar
      const colores = ["#218380", "#8F2D56", "#D81159", "#D16666", "#FBB13C", "#7f7f7f", "#73D2DE", "#B6C649", "#464646"];
  
      // Asignamos un color diferente a cada grid-item en base a su índice
      $(elemento).css({"background-color" : colores[indice],
      'color' : 'white',
      'font-weight' : 'bold',
      'text-align' : 'center'
    });
    });
  });
  