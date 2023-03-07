import mockPost from "../data/mockPost.js";

/* ----------------------------- countdown days ----------------------------- */
const deadline = new Date("Apr 13, 2025 00:00:00").getTime();
let getDate = new Date().getTime("ja-JP", {
  timeZone: "Asia/Tokyo",
});

const countDownFunc = setInterval(function () {
  let t = deadline - getDate;
  let days = Math.floor(t / (1000 * 60 * 60 * 24));

  document.getElementById("countdown-days").innerHTML = days;

  if (t < 0) {
    clearInterval(countDownx);
    document.getElementById("countdown-days").innerHTML = "EXPIRED";
  }
}, 0);

const todayFunc = function () {
  let event = new Date();

  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };
  const optionsYear = {
    year: "numeric",
  };

  document.getElementById("current-date").innerHTML = event.toLocaleDateString(
    "ja-JP",
    options
  );
  document.getElementById("current-year").innerHTML =
    event.toLocaleDateString("ja-JP", optionsYear) + "(令和5年)";
};

todayFunc();

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
  effect: "fade",
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
  effect: "fade",
});

/* ------------------------------ scroll to top ----------------------------- */
const scrollTop = document.querySelector(".c-footer__backtotop");
scrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* ----------------------------- infinite scroll ---------------------------- */
const loading = document.querySelector(".c-loadmore");
window.addEventListener("scroll", () => {
  if (loading) {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight) {
      // show the loading animation
      showLoading();
    }
  }
});

function showLoading() {
  loading.classList.add("show");

  // load more data
  setTimeout(() => {
    renderArticle(mockPost, 6);
  }, 500);
}

/* -------------------------------------------------------------------------- */
/*                                emulator data                               */
/* -------------------------------------------------------------------------- */

// render article
const articleList = document.querySelector("#article-list");
let maxItem = 12;

const renderArticle = (data, max) => {
  console.log("data", data.slice(0, max));

  data.slice(0, max).forEach((item) => {
    // console.log("item", item);

    let article = `
        <div class="c-article__items">
          <a href="./listCategory.html" class="c-article__category ${
            item.typeCategory
          }">
            ${item.category}
          </a>

          <a href="./detail.html" class="c-article__box">
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

renderArticle(mockPost, maxItem);
