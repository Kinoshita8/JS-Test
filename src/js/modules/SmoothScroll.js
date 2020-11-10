import velocity from 'velocity-animate';

export default class SmoothScroll {
  constructor() {
    this.$button = Array.from(document.querySelectorAll('a[href^="#"]'));
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
      duration: 800,
      offset: -65,
      easing: 'ease-out',
    });
  }
}
