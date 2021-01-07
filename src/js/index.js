import ModalUI from './modules/ModalUI.js';
import SmoothScroll from './modules/SmoothScroll.js';
import MoviePlayer from './modules/MoviePlayer.js';
import HeaderMenuUI from './modules/HeaderMenuUI.js';
import TabUI from './modules/TabUI.js';
import BackgroundSlider from './modules/BackgroundSlider.js';
import TextAccordionUI from './modules/TextAccordionUI.js';
// import YoutubeCarouselUI from './modules/YoutubeCarouselUI.js';
// import YoutubeIframeUI from './modules/YoutubeIframeUI.js';
// import Youtube from './modules/Youtube.js';
import CarouselUI from './modules/CarouselUI.js';
import ScrollBannerUI from './modules/ScrollBannerUI.js';

new HeaderMenuUI();
new TabUI();
new BackgroundSlider();
new CarouselUI();
new ScrollBannerUI();
const scroll = new SmoothScroll();
const accordion = new TextAccordionUI();
const modal = new ModalUI();
const movie = new MoviePlayer();
// var youtubeCarousel = new YoutubeCarouselUI();
// var youtubeIframeUI = new YoutubeIframeUI();
// var youtube = new Youtube();

scroll.on('accordionOpen',($button,$text) => {
  accordion.open($button,$text);
});


modal.on('movieStart', () => {
  movie.onYouTubeIframeAPIReady();
});
modal.on('moviePause', () => {
  movie.onPlayerPause();
});
// youtube.on('onYoutubeReady', () => {
//   youtubeIframeUI.setMovie();
// });
// youtubeCarousel.on('slide', () => {
//   youtubeIframeUI.initMovie();
// });

new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 2,
  // spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 2,
      clickable: false,
      el: ,
    },
  },
});

window.onload = function() {
  const spinner = document.querySelector('.loading');
  spinner.classList.add('loaded');
}
// new Swiper('.swiper-container', {
//   // Optional parameters
//   //   direction: '',
//   loop: true,

//   // If we need pagination
//   //   pagination: {
//   //     el: '.swiper-pagination',
//   //   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   //   slidesPerView: 2,
//   //   breakpoints: {
//   //     // 768px以上の場合
//   //     768: {
//   //       slidesPerView: 1,
//   //     },
//   //   },
//   // And if we need scrollbar
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
// });
