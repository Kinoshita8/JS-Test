import velocity from 'velocity-animate';

export default class AccordionUI {
  constructor() {
    this.$text = Array.from(document.querySelectorAll('.m-accordion'));
    this.$button = Array.from(document.querySelectorAll('.js-accordion'));
    this.bind();
  }

  /**
   * イベント付与
   */
  bind() {
    this.$button.forEach(($button, i) => {
      $button.addEventListener('click', (e) => {
        e.preventDefault();
        if (!$button.classList.contains('is_show')) {
          this.open($button, this.$text[i]);
        } else {
          this.close($button, this.$text[i]);
        }
      });
    });
  }

  /**
   * アコーディオンを開く
   * @param {*} $button 開閉ボタン
   * @param {*} $text アコーディオン内のコンテンツ
   */
  open($button, $text) {
    $button.classList.toggle('is_show');
    velocity($text, { height: '224px' }, { duration: 500 });
  }

  /**
   * アコーディオンを閉じる
   * @param {*} $button 開閉ボタン
   * @param {*} $text アコーディオン内のコンテンツ
   */
  close($button, $text) {
    $button.classList.toggle('is_show');
    velocity($text, { height: '0px' }, { duration: 500 });
  }
}
