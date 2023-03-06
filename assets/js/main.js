import mockPost from "../data/mockPost.js";

/* --------------------------------- swiper --------------------------------- */
const swiperMainvisual = new Swiper(".p-mainvisual__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1000,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  fadeEffect: { crossFade: false },
  virtualTranslate: true,
  effect: 'fade',
});

const swiperMovie = new Swiper(".p-movie__swiper", {
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  fadeEffect: { crossFade: false },
  virtualTranslate: true,
  effect: 'fade',
});

/* ------------------------------ scroll to top ----------------------------- */
const scrollTop = document.querySelector(".c-footer__backtotop");
scrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* ----------------------------- render article ----------------------------- */
const articleList = document.querySelector("#article-list");

const renderArticle = (data) => {
  data.forEach((item) => {
    console.log("item", item);

    let article = `
        <div class="c-article__items">
          <a href="#" class="c-article__category ${item.typeCategory}">
            ${item.category}
          </a>

          <a href="#" class="c-article__box">
              <div class="c-article__thumbnail">
                  <img src="${item.thumbnail}" alt="${item.title}">
                  
                  ${item.new ? `<p class="c-article__new">new</p>` : ""}
              </div>

              <div class="c-article__content">
                  <p class="c-article__date">
                    ${item.date}
                  </p>

                  <h2 class="c-article__title">
                    ${item.title}
                  </h2>

                  <figure class="c-article__photo">
                      <img src="${item.avatar}" alt="${item.author}">
                      <p class="c-article__name">
                        ${item.author}
                      </p>
                  </figure>
              </div>
          </a>

          <div class="c-article__tags">
            <a href="#">＃大阪グルメ</a>
            <a href="#">#ミャクミャク</a>
            <a href="#">＃万博会場探訪</a>
            <a href="#">＃SDGs</a>
            <a href="#">＃お得に万博</a>             
          </div>
        </div>
      `;
    articleList.insertAdjacentHTML("beforeend", article);
  });
};

// renderArticle(mockPost);
