$(document).ready(function () {

  // TODO Scroll Button
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('.btn_top_blue').fadeIn();
    } else {
      $('.btn_top_blue').fadeOut();
    }
  });
  $('.btn_top_blue').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 800);
  });

  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });

// TODO Slick SLider
  $('.slider').slick(
    {
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    }
  );


});

