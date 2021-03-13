$(function() {
    $('.slick-container').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, ]
    });

    $(".card .card-body .card-img-overlay").click(function(){
        console.log("------TEST");
        $(this).parent(".card-body").toggleClass("active");
    });
});
