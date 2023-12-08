$(document).ready(function(){

    $('.wrapper').slick({
        dots: true,

        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 3,
        speed:300,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                centerMode: true,
                centerPadding: '40px',
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '40px',
                
              }
            }

          ]
    });

});