$('#slider-button').on('click', function () {
    next();

})

let timeout;
let i = 0;
$(function () {

    $.each($('figure > img'), function (i, item) {
        // $(this).show();

        console.log(i)
        console.log(item)

    })


    const arrayImagenes = $('figure > img');
    let fullLength = arrayImagenes.length;

    function next() {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            $('#foto' + i).show();
            $('#foto' + i).fadeIn(500);
            $('#foto' + i).animate({
                'right': '100vw'
            })
            $('#foto' + i - 1).hide();
            i++;

            if (i === fullLength) {
                i = 0;
            }
            next();
        }, 2000)
    }
    next()
});



/*
<script> Intentos Previos

		$('#slider-button').on('click', function () {
			animarSlider();

		})

		function animarSlider() {
			let slideLength = $('figure > img').length;
			console.log(slideLength);

			let index = 0;

			for(i=0; i <slideLength ; i++){
				index=i
				animarSiguiente(index)
			}

		}

		function animarSiguiente(index,val) {
        if (index < slideLength) {
            animarFoto(index);
            let next=index++;
            // Llama recursivamente a animarSiguiente después de un tiempo de espera
            setTimeout(animarSiguiente(next), 1000); // 1000 milisegundos = 1 segundos
        }}




		function animarFoto(index) {
			$(`#foto${index}`).animate({
				right: '100%'
			});
		}
	</script>

*/