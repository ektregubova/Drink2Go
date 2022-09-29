let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
//let mapImage = document.querySelector('.map__image');
//let mapIframe = document.querySelector('.map__iframe');

//mapImage.classList.add('map__image--nojs');
//mapIframe.classList.add('map__iframe--js');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
