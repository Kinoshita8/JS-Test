import ModalUI from './modules/ModalUI.js';
import SmoothScroll from './modules/SmoothScroll.js';
import MoviePlayer from './modules/MoviePlayer.js';
import HeaderMenuUI from './modules/HeaderMenuUI.js';
import TabUI from './modules/TabUI.js';

new SmoothScroll();
new HeaderMenuUI();
new TabUI();
var modal = new ModalUI();
var movie = new MoviePlayer();

modal.on('movieStart', () => {
  movie.onYouTubeIframeAPIReady();
});
modal.on('moviePause', () => {
  movie.onPlayerPause();
});
