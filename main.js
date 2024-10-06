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
        speed: 800,
        fade: true,
        autoplay: true,
        cssEase: "linear",
    })
});

AOS.init({
  once: true,
});

$(".hero-carousel").on("beforeChange", function(event) {
  document.querySelectorAll(".aos-animate").forEach((element) => {
    element.classList.remove("aos-animate");
  })
})

$(".hero-carousel").on("afterChange", function(event) {
  document.querySelectorAll(".aos-init").forEach((element) => {
    element.classList.add("aos-animate");
  })
})


// Logic for changing flag at language select element.
const langDropdown = document.querySelector(".info-bar__lang");
langDropdown.addEventListener("change", (e) => {
  const value = langDropdown.children[1].value;
  langDropdown.children[0].setAttribute("src", `./assests/img/lang-flags/${value}.jpg`)
})