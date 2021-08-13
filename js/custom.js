$(document).ready(function () {
      
    window.addEventListener('scroll', function () {
        var element = this.document.querySelector('h_menu');
        h_menu.classList.toggle('sticky', window.scrollY > 300);
    });

    // Counter up js

    $('.count').counterUp({
        delay: 10,
        time: 1000
    });


    // Testimonial Slider Here
    $('#test01.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
        
    });
    $( ".owl-prev").html('<i class="fa fa-long-arrow-left"></i>');
    $( "#test01 .owl-next").html('<i class="fa fa-long-arrow-right"></i>');

    // Client Slider Here
    $('#test02.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });



});