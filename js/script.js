window.addEventListener("DOMContentLoaded", function () {
  //слайдер 1
  new Swiper(".intro__slider-swiper", {
    speed: 600,
    //расстояние между слайдами
    spaceBetween: 50,
    //активный слайд по центру
    centerSlides: true,
    //Стартовый слайд
    initialSlide: 3,
    //кол-во слайдов для показа
    slidesPerView: 4,
    // кол-во слайдов при прокрутке
    slidesPerGroup: 1,

    //Навигация
    //Буллеты, текущее положение, прогрессбар
    pagination: {
      el: ".intro__slider-pagination",
      //буллеты
      clickable: true,
      //динамические буллеты
      dynamicBullets: true,
      //Кастомные буллеты (указать буллету номер)
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      580: {
        slidesPerView: 2,
      },
      1074: {
        slidesPerView: 3,
      },
      1336: {
        slidesPerView: 4,
      },
    },
  });

  //expertise-open
  let expertiseBtn = document.querySelector("#expertiseBtn");
  expertiseBtn.addEventListener("click", openDescription);

  function openDescription() {
    let expertiseDescription = document.querySelector("#expertiseDescription");
    expertiseDescription.classList.toggle("open");
    expertiseBtn.classList.toggle("open");
  }

  //burger
  let burger = document.getElementById("nav_toggle");

  burger.addEventListener("click", myBurger);

  function myBurger() {
    let element = document.getElementById("nav");
    element.classList.toggle("open");
    burger.classList.toggle("active");
  }

  //прокрутка при клике
  const menuLinks = document.querySelectorAll(".header__nav-link[data-goto]");

  if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
      const menuLink = e.target;

      //проверка есть ли такой атрибут
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue =
          gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        });
        e.preventDefault();
      }
    }
  }
});
