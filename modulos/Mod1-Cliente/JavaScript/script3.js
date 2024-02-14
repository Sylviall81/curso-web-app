function mainMovieBeta() {

    let ticketQtity = Number(document.getElementById('cantidad-entradas').value)
    let ticketPrice = Number(document.getElementById('precio-entradas').value)
    let descuento = 0;
    let discountPrice = 0;
    let totalPay = 0;
    let porciento= 0;


    console.log(ticketQtity, typeof (ticketQtity));
    console.log(ticketPrice, typeof (ticketPrice))


    if (ticketQtity === 1){
      
        descuento = 0;
        totalPay = ticketPrice
    } else if (ticketQtity == 4) {
        descuento = ticketPrice * 0.20;
        porciento= 20;

    } else if (ticketQtity == 3) {
        descuento = ticketPrice * 0.15;
        porciento= 15;

    } else if (ticketQtity == 2) {
        descuento = ticketPrice * 0.10;
        porciento= 10;

    } else if(ticketQtity >= 5) {

        porciento= 25;
        descuento = ticketPrice * 0.25; //desc 25%
    }

    discountPrice = (ticketPrice - descuento).toFixed(2)
    totalPay = (ticketQtity * discountPrice).toFixed(2)


    let mensaje = `PROMOCION ESPECIAL: Ud. ha solicitado comprar ${ticketQtity} entradas por un precio de ${ticketPrice}€ por entrada.Para esta cantidad de entradas usted disfruta de un ${porciento}% de descuento y una reduccion de ${descuento.toFixed(2)}€ en el precio total, por lo que debe pagar ${totalPay}€`

    // alert(mensaje)

    document.getElementById('respuesta7').innerHTML = mensaje;
}

