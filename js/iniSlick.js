$(function() {
    $('.slick-container').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        centerMode: true,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, ]
    });

    $(".card .card-body .card-img-overlay").click(function() {
        console.log("------TEST");
        $(this).parent(".card-body").toggleClass("active");
    });

    let maxH = 0;
    $(".card .card-body").each(function() {
        var thisH = $(this).height();
        if (thisH > maxH) {
            maxH = thisH;
        }
    });

    $(".card .card-body").each(function() {
        $(this).height(maxH);
    });
});
