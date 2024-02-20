


$('.grid-item').on({
    mouseenter: function () {
        $(this).css("background-color", "navy");
    },
    mouseleave: function () {
        $(this).css("background-color", "white");
    },
    click: function () {
        $(this).css("background-color", "purple");
    }


})


$('#tile0').on({
    mouseenter: function () {
        // $(this).css("background-color", "lightgrey");
        $(this).html('click ME and check tile 9')
        $(this).css({"background-color":"black",'color': 'blue','font-weight': 'bold'});
    },
    mouseleave: function () {
        $(this).css({'background-image': 'url("https://picsum.photos/100")','color:':'red','background-size':'cover'});
        
    },
    click: function () {
        $(this).html('awesome! right?')
        $(this).css({"background-image": "none", "background-color":'white' });
        $('#tile8').css({'background-image': 'url("https://picsum.photos/100")','background-size':'cover'});
        $('#tile8').html('Now,hover on me');
    }


})

$('#tile8').on({
    mouseenter: function () {
        $(this).css("border", "dotted 2px red");
    },
    mouseleave: function () {
        $(this).css({"background-color":"black",'color': 'black','font-weight': 'bold'});
        $(this).css("border", "solid 5px green");
    },
    click: function () {
        $(this).css("background-color", "white");
    }


})

$('#tile2').on({
    mouseenter: function () {
        $(this).css({'background-image': 'url("https://picsum.photos/100")','background-size':'cover'});
    },
    mouseleave: function () {
        $(this).css({"background-color":"black",'color': 'white','font-weight': 'bold'});
        $(this).css("border", "dotted 5px yellow");
        $(this).html("WELCOME");
    },
    click: function () {
        $(this).css("background-color", "white");
    }


})

$('#tile3').hover(function() {
    $(this).css("background-color", "green");
});




$('#tile6').hover(function() {
    $(this).html('<button class="fit small">ChangeBg</button>')
});


$('#tile6').on('click', function() {
    $('.grid-item').css('background-color', 'lightgray')
});

$('#tile1').on('mouseenter', function() {
    $(this).css('background-color', 'white');
    $(this).html('click here and erase tile 5');
});

$('#tile1').on('click', function() {
    $('#tile4').hide();
});












