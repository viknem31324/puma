"use strict";

var _Swiper, _Swiper2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var burger = document.querySelector('.burger');
var menu = document.querySelector('.header__navigation');

var disScroll = function disScroll() {
  var pagePosition = window.scrollY;
  document.body.classList.add('dis-scroll');
  document.body.dataset.position = pagePosition;
  document.body.style.top = -pagePosition + 'px';
};

var enScroll = function enScroll() {
  var pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = 'auto';
  document.body.classList.remove('dis-scroll');
  window.scrollTo({
    top: pagePosition,
    left: 0
  });
  document.body.removeAttribute('data-position');
};

burger.addEventListener('click', function (e) {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__navigation--active');

  if (burger.classList.contains('burger--active')) {
    disScroll();
  } else {
    enScroll();
  }
});
new Swiper('.gallary__swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  loop: true,
  slidesPerView: 'auto',
  speed: 1000,
  breakpoints: {
    400: {
      slidesPerView: 'auto'
    },
    800: {
      slidesPerView: 'auto'
    },
    1024: {
      slidesPerView: 'auto'
    },
    1200: {
      slidesPerView: 'auto'
    }
  }
});
new Swiper('.testimonials__swiper', (_Swiper = {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: '1',
  loop: true
}, _defineProperty(_Swiper, "slidesPerView", 'auto'), _defineProperty(_Swiper, "speed", 1500), _Swiper));
new Swiper('.hero__swiper', (_Swiper2 = {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: '1',
  loop: true
}, _defineProperty(_Swiper2, "slidesPerView", 'auto'), _defineProperty(_Swiper2, "speed", 1500), _Swiper2));
document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelector('.tabs');
  var tabsBtn = document.querySelectorAll('.tabs__btn');
  var tabsContent = document.querySelectorAll('.tabs__content');

  if (tabs) {
    tabs.addEventListener('click', function (e) {
      if (e.target.classList.contains('tabs__btn')) {
        var tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(function (el) {
          el.classList.remove('tabs__btn--active');
        });
        document.querySelector("[data-tabs-path=\"".concat(tabsPath, "\"]")).classList.add('tabs__btn--active');
        tabsHandler(tabsPath);
      }

      if (e.target.classList.contains('tabs__arrow--prev')) {
        var activeBtn = document.querySelector('.tabs__btn--active');
        var activeParent = activeBtn.closest('.tabs__item');
        var previousParent = activeParent.previousElementSibling;

        if (previousParent) {
          var prevActive = previousParent.querySelector('.tabs__btn');
          tabsBtn.forEach(function (el) {
            el.classList.remove('tabs__btn--active');
          });
          prevActive.classList.add('tabs__btn--active');
          var path = prevActive.dataset.tabsPath;
          tabsHandler(path);
        }
      }

      if (e.target.classList.contains('tabs__arrow--next')) {
        var _activeBtn = document.querySelector('.tabs__btn--active');

        var _activeParent = _activeBtn.closest('.tabs__item');

        var nextParent = _activeParent.nextElementSibling;

        if (nextParent) {
          var nextActive = nextParent.querySelector('.tabs__btn');
          tabsBtn.forEach(function (el) {
            el.classList.remove('tabs__btn--active');
          });
          nextActive.classList.add('tabs__btn--active');
          var _path = nextActive.dataset.tabsPath;
          tabsHandler(_path);
        }
      }
    });
  }

  var tabsHandler = function tabsHandler(path) {
    tabsContent.forEach(function (el) {
      el.classList.remove('tabs__content--active');
    });
    document.querySelector("[data-tabs-target=\"".concat(path, "\"]")).classList.add('tabs__content--active');
  };
});