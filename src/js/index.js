import ModalUI from './modules/ModalUI.js';
import SmoothScroll from './modules/SmoothScroll.js';
import MoviePlayer from './modules/MoviePlayer.js';
import HeaderMenuUI from './modules/HeaderMenuUI.js';
import TabUI from './modules/TabUI.js';
import BackgroundSlider from './modules/BackgroundSlider.js';

new SmoothScroll();
new HeaderMenuUI();
new TabUI();
new BackgroundSlider();
var modal = new ModalUI();
var movie = new MoviePlayer();

modal.on('movieStart', () => {
  movie.onYouTubeIframeAPIReady();
});
modal.on('moviePause', () => {
  movie.onPlayerPause();
});
