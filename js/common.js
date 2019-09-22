$(function() {

    //my-menu
    $('#my-menu').mmenu({
        extensions: ['theme-black', 'effect-menu-slide',
            'pagedim-black', 'position-right'
        ],
        navbar: {
            title: '<img src="./img/logo.png">'
        }
    });

    //hamburger
    let api = $('#my-menu').data('mmenu');
    api.bind('open:finish', function() {
        $('.hamburger').addClass('is-active');
    }).bind('close:finish', function() {
        $('.hamburger').removeClass('is-active');
    });



//owlCarousel- чтобы не было проблемы с размером блоков карусели
$('.servises-carousel').on('initialized.owl.carousel', function (){
    setTimeout(() => {
        carouselServise()
    }, 100);
});

//owlCarousel
    $(document).ready(function () {
        $('.servises-carousel').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            smartSpeed: 500,
            navText: ['<i class="fa fa-angle-double-right">', '<i class="fa fa-angle-double-left">'],
            responsiveClass: true,
            responsive: {
                0: {
                    items:1
                },
                800: {
                    items: 2
                },
                1100: {
                    items: 3 
                }
            }
        });
    });


//height blocks
    function carouselServise() {
        $('.servises__carousel-item').each(function() {
            let ths = $(this);
            let thsh = ths.find('.servises__carousel-item-text').outerHeight();
            ths.find('.servises__carousel-item-img').css('min-height', thsh)
        });
    } carouselServise();

    $('.servises__carousel-item-text .carousel__title').each(function(){
        let ths = $(this);
        ths.html(ths.html().replace(/(\S+\s*$)/, '<span>$1</span>'));
    });


    $('.reviews').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 500
    });

    $('.partners').owlCarousel({
        loop: true,
        items: 4,
        smartSpeed: 500,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-right">', '<i class="fa fa-angle-left">'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
  

    
  

    // $('section .gallery__title').each(function () {
    //     let ths = $(this);
    //     ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
    // });

    // function onResize() {
    //     $('.servises__carousel-item-text').equalHeights();
    // }
    // onResize();
    
});