var $slider = $('.slider.left');

$(window).scroll(function() {
    if($(this).scrollTop() > 10) {
        $slider.stop().animate({left: '0px'}, 200);
    } else {
        $slider.stop().animate({left: '-1000px'}, 300);
    }
});

$(function() {
    $(".slider").each(function() {
        var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
        $(this).css("background-color", hue);
    });
});