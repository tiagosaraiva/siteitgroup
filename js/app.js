


$(document).ready(function () {



    $('#slideshow').bjqs({
        'animtype': 'slide',
        'responsive': true,
        'showcontrols': true,
        'showmarkers': false,
        'randomstart': false,
        'nexttext': "<span id='btn-proximo'>proximo</span>",
        'prevtext': "<span id='btn-anterior'>anterior</span>"

    });

    $("#img-esquerda").on('click', function () {

        $("#btn-anterior").click();
    });
    $("#img-direita").on('click', function () {

        $("#btn-proximo").click();
    });

    $("#esquerda-1").liveTile({ mode: 'flip', initDelay: 500 });
    $("#esquerda-2").liveTile();
    $("#esquerda-3").liveTile({ mode: 'flip'});
    $("#esquerda-4").liveTile();

    

    $("#direita-1").liveTile({ mode: 'flip'});
    $("#direita-2").liveTile({ mode: 'slide'});
    $("#direita-3").liveTile({ mode: 'flip', initDelay: 400 });
    $("#direita-4").liveTile({ mode: 'flip', initDelay: 200 });
    $("#direita-5").liveTile({ mode: 'slide', initDelay: 500 });
    $("#direita-6").liveTile({ mode: 'slide', initDelay: 100 });

   

    $("#flip1").liveTile(
        {
            initDelay: 500,
            mode: 'flip-list',
            swap: 'image',
            frontIsRandom: true,
            backIsBackgroundImage: false,
            backIsInGrid: true,
            backIsRandom: false,
            // every tile in the list should flip every time the delay interval occurs
            alwaysTrigger: true,
            //flip the tiles in sequence
            triggerDelay: function (idx) { return idx * 500; }
        }
    );




})