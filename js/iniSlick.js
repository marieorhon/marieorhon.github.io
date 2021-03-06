$(function() {
    $('.slick-container').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        centerMode: true,
        responsive: [{
            breakpoint: 1120,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },{
            breakpoint: 865,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },{
            breakpoint: 622,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $(".card .card-body .card-img-overlay").click(function() {
        $(this).parent(".card-body").toggleClass("active");
    });

    function setHeight(){
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
    }

    setTimeout(setHeight, 200);
});
