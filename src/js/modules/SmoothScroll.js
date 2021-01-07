import velocity from 'velocity-animate';
import EventEmitter from 'EventEmitter';

export default class SmoothScroll extends EventEmitter {
  constructor() {
    super();
    this.$button = Array.from(document.querySelectorAll('.js-smooth'));
    this.bind();
  }

  /**
   * イベント付与
   */
  bind() {
    this.$button.forEach(($button) => {
      $button.addEventListener('click', (e) => {
        e.preventDefault();
        var id = $button.getAttribute('href');
        var $position = document.querySelector(id);
        /* スクロール先がアコーディオン内の場合 */
        if($button.classList.contains('js-smooth-accordion')){
          var $text = $position.closest('.m-accordion');
          var $accordionButton = $text
            .closest('.l-accordion')
            .querySelector('.js-accordion');
          var style = window.getComputedStyle($text);
          if (style.getPropertyValue('height') == '0px') {
            /* アコーディオンを開く */
            this.emit('accordionOpen', $accordionButton, $text);
          }
        }
        this.scroll($position);
      });
    });
  }


  /**
   * スムーススクロール
   * @param {*} $position スクロール後の場所
   */
  scroll($position) {
    velocity($position, 'scroll', {
      scrollTop: 0,
      duration: 800,
      offset: -65,
      easing: 'ease-out',
    });
  }
}
