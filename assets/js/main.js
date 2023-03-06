/* --------------------------------- swiper --------------------------------- */
const swiperMainvisual = new Swiper(".p-mainvisual__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 600,
  allowTouchMove: false,
});

const swiperMovie = new Swiper(".p-movie__swiper", {
  speed: 600,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
});

/* ------------------------------ scroll to top ----------------------------- */
const scrollTop = document.querySelector(".c-footer__backtotop");
scrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
