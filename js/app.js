


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
    $("#esquerda-2").liveTile({ mode: 'flip', initDelay: 500 });
    $("#esquerda-3").liveTile({ mode: 'flip', initDelay: 500 });
    $("#esquerda-4").liveTile();

    

    $("#direita-1").liveTile({ mode: 'flip', initDelay: 500 });
    $("#direita-2").liveTile({ mode: 'flip', initDelay: 500 });
    $("#direita-3").liveTile({ mode: 'flip', initDelay: 500 });
    $("#direita-4").liveTile({ mode: 'flip', initDelay: 500 });

   

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