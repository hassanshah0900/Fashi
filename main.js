// AOS.init();

$(document).ready(function(){
    $(".product-carousel").slick({
        dots: true,
        autoplay: true,
        slidesToShow: 3,
        speed: 800,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
            }
          }, 
          {
            breakpoint: 690,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 505,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });
});

$(document).ready(function() {
    $(".hero-carousel").slick({
        infinite: true,
        speed: 1000,
        fade: true,
        autoplay: true,
        cssEase: "linear",
    })
});

// $(".hero-carousel").on("beforeChange", function(event, slick) {
//   console.log("hello");
//   // AOS.refreshHard();
// })

$(".hero-carousel .btn--primary").on("click", function(event) {
  console.log("clicked");

  // document.querySelectorAll('[data-aos]').forEach((element) => {
  //     element.setAttribute('data-aos', element.getAttribute('data-aos'));
  // });
  
  // AOS.refresh();
  AOS.init();
})
