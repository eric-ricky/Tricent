


$(window).ready(function() {

    $(window).scroll(function() {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
        $('topBtn'.toggleClass('scrolled-top', $(this).scrollTop() > 250));
    });
    $(window).scroll(function() {

    });

    $('.navbar-toggler').click(function() {
        $('.navbar-toggler').toggleClass("close");
    });

    //SLIDE ANIMATION
    $(window).scroll(function() {
        $('.slideanim').each(function() {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();

            if(pos < winTop + 600) {
                $(this).addClass('slide');
            }
        });
    });
})