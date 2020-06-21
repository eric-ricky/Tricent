


$(window).ready(function() {

    $(window).scroll(function() {
        const top_1 = document.body.scrollTop;
        const top_2 = document.documentElement.scrollTop;

        if(top_1 > 80 || top_2 > 80) {
            $(".navbar").css("padding", "0.05rem 1rem");
            $(".navbar").css("backgroundColor", "#555");
        } else {
            $(".navbar").css("padding", ".3rem 1rem");
            $(".navbar").css("backgroundColor", "#555");
        }
    })

    $('.navbar-toggler').click(function() {
        $('.navtoggle').toggleClass("close");
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