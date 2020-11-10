export default class HeaderMenuUI {
  constructor() {
    this.$hamburger = document.querySelector('#menu');
    this.$hamburgerLine = Array.from(
      document.querySelectorAll('.hamburger_line')
    );
    this.$menu = document.querySelector('.sub-menu');
    this.$bg = document.querySelector('#bg');

    this.bind();
  }

  /**
   * イベント付与
   */
  bind() {
    this.$hamburger.addEventListener('click', () => {
      this.open();
    });
  }

  /**
   * ハンバーガーメニューを開く
   */
  open() {
    this.$hamburgerLine.forEach(($hamburgerLine) => {
      $hamburgerLine.classList.toggle('is-active');
    });
    this.$menu.classList.toggle('sub-menu-active');
    this.$bg.classList.toggle('sub-menu__bg');
  }
}
