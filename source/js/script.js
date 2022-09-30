let mainNav = document.querySelector('.main-nav');
let toggleNav = document.querySelector('.main-nav__toggle');
let mapImage = document.querySelector('.map__image');
let mapIframe = document.querySelector('.map__iframe');

mapImage.classList.add('map__image--nojs');
mapIframe.classList.add('map__iframe--js');

mainNav.classList.remove('main-nav--nojs');

toggleNav.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});
