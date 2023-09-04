$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  $('.owl-dot span').css('color', 'red');
  owl.owlCarousel({
      items: 3,
      dots: true,
      margin: 0,
      loop: false,
      nav: true, 
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], // Customize the navigation button icons
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
          0: {
              items: 1,
              nav: true
          },
          600: {
              items: 1,
              nav: false
          },
          1000: {
              items: 2,
              nav: true,
              loop: false
          }
      }
  });
});
