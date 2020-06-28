


$(window).ready(function() {

    $(window).scroll(function() {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);       
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