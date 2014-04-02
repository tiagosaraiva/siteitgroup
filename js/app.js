$(document).ready(function () {

    $(function () {
        $('#formulario-contato').on('submit', function (e) {
            e.preventDefault();
            $.ajax({
                url: 'http://localhost:3999/api/contact', //this is the submit URL
                type: 'POST', //or POST
                data: $('#formulario-contato').serialize(),
                success: function (data) {
                    alert('Obrigado!')
                },
                error: function (xhr, textStatus, error) {
                    console.log(xhr.statusText);
                    console.log(textStatus);
                    console.log(error);
                }
            });
        });
    });


    function determina_altura(_altura) {

        $(".section").css('height', _altura);

    }

    var altura = window.innerHeight;
    determina_altura(altura);

    $(window).resize(function () {

        determina_altura(window.innerHeight);

    });

    $('#one-page-nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {
            //I get fired when the animation is starting
        },
        end: function () {
            //I get fired when the animation is ending
        },
        scrollChange: function ($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });


    $("#one-page-nav li a").on('click', function () {
        //$("#one-page-nav li").removeClass('current');
        //$(this).parent().addClass('active');
    });

});