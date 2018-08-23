$(document).ready(function(){
    $('.realisedCalcSlider__slider').slick({
        slidesToShow: 1,
        prevArrow: '<img src="img/sliderPrevBtn.svg" class="slick-prev">',
        nextArrow: '<img src="img/sliderNextBtn.svg" class="slick-next">'
    });
    $('.scroller__list').niceScroll({
        cursorwidth: "7px",
        cursorcolor: "#FFC501",
        autohidemode: false,
        enablemousewheel: false,
        cursorborderradius: "0",
        background:"rgba(20,20,20,0.3)",
    });
    $('.readyCompanies__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        infinite: false,
        prevArrow: '<img src="img/sliderPrevBtnBlack.svg" class="slick-prev2">',
        nextArrow: '<img src="img/sliderNextBtnBlack.svg" class="slick-next2">',
        responsive: [
            {
              breakpoint: 1345,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                variableWidth: false
              }
            },
            {
                breakpoint: 850,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  variableWidth: false,
                }
            }
          ]
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
    $('.sertificationSlider__list').slick({
        infinite: true,
        slidesToShow: 7,
        prevArrow: '<img src="img/blackLeftArrow.svg" class="sertificationSlider__prevArrow">',
        nextArrow: '<img src="img/blackRightArrow.svg" class="sertificationSlider__nextArrow">'
    });
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
  });