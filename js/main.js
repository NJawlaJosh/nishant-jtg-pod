$(document).ready(() => {
    $(".slider").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
    });
    $('.prev').click(function(){
      $('.slider').slick('slickPrev');
    })
    
    $('.next').click(function(){
      $('.slider').slick('slickNext');
    })
  });