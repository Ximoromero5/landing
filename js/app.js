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
});