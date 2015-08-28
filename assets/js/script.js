var $slider = $('.slider.left');

$(window).scroll(function() {
    if($(this).scrollTop() > 10) {
        $slider.stop().animate({left: '0px'}, 200);
    }
});

$(function() {
    $(".slider").each(function() {
        var color = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
        $(this).css("background-color", color);
    });
});

$('.slider').mouseover(function() {
    $(this).css("opacity", '1');
});