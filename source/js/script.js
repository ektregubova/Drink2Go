let mainNav = document.querySelector('.main-nav');
let toggleNav = document.querySelector('.main-nav__toggle');
let mapImage = document.querySelector('.map__image');
let mapLeaflet = document.querySelector('.map__leaflet');

mapImage.classList.add('map__image--nojs');
mapLeaflet.classList.add('map--js');

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

const swiper = new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletElement: 'button',
    bulletActiveClass:'swiper-pagination-bullet--active'
  },
}
);

const map = L.map("map")
  .setView({
    lat: 59.96838,
    lng: 30.31740,
  }, 18);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map)

const mainPinIcon = L.icon({
  iconUrl: './img/icons/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: 59.96832,
    lng: 30.31748,
  },
  {
    icon: mainPinIcon,
  },
);

marker.addTo(map);
