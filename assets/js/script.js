$(window).scroll(function() {
    if($(this).scrollTop() > 100) {
        $slider.stop().animate({left: '200px'}, 300);
    } else {
        $slider.stop().animate({left: '-90px'}, 300);
    }
});

var $slider = $('.slider');

$(function() {
    $(".slider").each(function() {
        var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
        $(this).css("background-color", hue);
    });
});