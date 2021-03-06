$(document).ready(function () {
    $('.changeBox button').each(function () {
        $(this).click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');

            if ($('#tab-1').hasClass('active')) {
                $('#box3').removeClass('active');
                $('#box2').removeClass('active');
                $('#box1').addClass('active');
            } else if ($('#tab-2').hasClass('active')) {
                $('#box3').removeClass('active');
                $('#box2').addClass('active');
                $('#box1').removeClass('active');
            } else {
                $('#box3').addClass('active');
                $('#box2').removeClass('active');
                $('#box1').removeClass('active');
            }
        })
    });

    //Questions toggle
    function questions() {
        $('.question').each(function () {
            $(this).click(function () {
                $('i.fas').each(function () { $(this).removeClass('fa-chevron-up'); });
                $('.answer').each(function () { $(this).removeClass('active') });
                $(this).next().toggleClass('active');
                $(this).find('i.fas').addClass('fa-chevron-up');
            });
        });
    }

    questions();

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    $('#field').keyup(function () {
        if (!validateEmail($(this).val())) {
            $(this).addClass('error');
            $('#iconLabel').addClass('error');
        } else {
            $(this).removeClass('error');
            $('#iconLabel').removeClass('error');
        }
    });

    $('#formulario').submit(function (e) { e.preventDefault() });


    //Hamburguer menu
    $('#hamburguer i').click(function () {
        $(this).hasClass('fa-bars') ? $(this).removeClass('fa-bars').addClass('fa-times') : $(this).removeClass('fa-times').addClass('fa-bars');
        $('#headerMenu').toggleClass('active');
    });

    $('#navMobile ul li a').each(function () {
        $(this).click(function () {
            $('#hamburguer i').removeClass('fa-times').addClass('fa-bars');
            $('#headerMenu').removeClass('active');
        });
    });

});