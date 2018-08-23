$(document).ready(function(){
    $("#gallery").liquo({
        menu: "#gallery-menu"
    });
    $('.scroller__list').niceScroll({
        cursorwidth: "7px",
        cursorcolor: "#F00000",
        autohidemode: false,
        enablemousewheel: false,
        cursorborderradius: "0",
        background:"rgba(20,20,20,0.3)",
    });
    if (window.screen.width <= 1215){
        $('.designStages__list').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<img src="img/sliderPrevBtn.svg" class="slick-prev">',
            nextArrow: '<img src="img/sliderNextBtn.svg" class="slick-next">'
        });
    }
    $('.sertificationSlider__list').slick({
        infinite: true,
        slidesToShow: 7,
        sadaptiveHeight: true,
        prevArrow: '<img src="img/blackLeftArrow.svg" class="sertificationSlider__prevArrow">',
        nextArrow: '<img src="img/blackRightArrow.svg" class="sertificationSlider__nextArrow">'
    });
    if (window.screen.width <= 1215){
        $('.electrican__list').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<img src="img/sliderPrevBtn.svg" class="slick-prev">',
            nextArrow: '<img src="img/sliderNextBtn.svg" class="slick-next">'
        });
    }
    $('.reviews__slider').slick({
        slidesToShow: 5,
        centerMode: true,
        arrows: true,
        slidesToScroll: 1,
        focusOnSelect: true,
        variableWidth: true,
        speed: 150,
        prevArrow: $('.reviews__btnPrev'),
        nextArrow: $('.reviews__btnNext')
    });
    $('.applicationForm__select').click(function(){
        $('#applicationForm__select').trigger('click');
    })
  });
