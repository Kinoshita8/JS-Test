import velocity from 'velocity-animate';
import EventEmitter from 'EventEmitter';

export default class ModalUI extends EventEmitter {
  constructor() {
    super();
    this.$modalOpen = Array.from(document.querySelectorAll('.js_modal-open'));
    this.$modalClose = Array.from(document.querySelectorAll('.js_modal-close'));
    this.$modalArea = document.querySelector('.modal');
    this.$modalContents = document.querySelector('.modal_body');
    this.noScroll = 'no-scroll';

    this.bind();
  }

  /**
   * イベント付与
   */
  bind() {
    this.$modalOpen.forEach(($modalOpen) => {
      $modalOpen.addEventListener('click', (e) => {
        e.preventDefault();
        this.open();
        this.emit('movieStart'); /* モーダル展開時に動画再生開始 */
      });
    });
    this.$modalClose.forEach(($modalClose) => {
      $modalClose.addEventListener('click', (e) => {
        e.preventDefault();
        this.close();
        this.emit('moviePause'); /* モーダル閉鎖時に動画停止 */
      });
    });
    //　モーダルコンテンツ外クリック時にモーダルウィンドウを閉じる
    this.$modalArea.addEventListener('click', (e) => {
      e.preventDefault();
      this.close();
      this.emit('moviePause');
    });
    //　モーダルコンテンツ内クリック時にモーダルウィンドウが閉じるのを防ぐ
    this.$modalContents.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  /**
   * モーダルを開く
   */
  open() {
    velocity(this.$modalArea, 'fadeIn', {
      duration: 230,
    });
    document.body.classList.add(this.noScroll);
  }

  /**
   * モーダルを閉じる
   */
  close() {
    velocity(this.$modalArea, 'fadeOut', {
      duration: 230,
    });
    document.body.classList.remove(this.noScroll);
  }
}
