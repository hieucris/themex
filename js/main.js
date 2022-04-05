$(document).ready(function () {
  // $('.fade').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   fade: true,
  //   cssEase: 'linear',
  //   nextArrow:$('.btnSlider-next'),
  //   prevArrow:$('.btnSlider-prev'),
  // });
  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  });

  $(window).bind('scroll', function () {
    var navHeight = $(window).height() - 600;
    if ($(window).scrollTop() > navHeight) {
      $('.header-bottom').addClass('fixed');
    }
    else {
      $('.header-bottom').removeClass('fixed');
    }
  });
})