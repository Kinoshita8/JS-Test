import velocity from 'velocity-animate';

export default class ScrollBannerUI {
  constructor() {
    this.$banner = document.querySelector('.l-cv'); /* バナー要素 */

    this.$cvShow = document.querySelector('#cvShow');
    this.$cvShowPosition = this.$cvShow.getBoundingClientRect();
    this.$dispPosition = this.$cvShowPosition.top + window.pageYOffset;　 /*　バナーの表示を開始する位置 */

    this.$endElement = document.querySelector('#btnEnd');
    this.$endPosition = this.$endElement.getBoundingClientRect();
    this.$stopPosition = this.$endPosition.top + window.pageYOffset; /* バナーを固定する位置 */

    this.windowHeight = screen.height;
    this.bind();
  }

  /**
   * イベント付与
   */
  bind() {
    window.addEventListener('DOMContentLoaded', () => {
      this.$banner.style.visibility = 'hidden';
      this.cvScrollEvent();
    });
    window.addEventListener('scroll', () => {
      this.cvScrollEvent();
    });
  }

  /**
   * 一定量のスクロールで画面下部にバナー表示
   */
  cvScrollEvent() {
    this.$scrollTop = document.documentElement.scrollTop;
    this.$dispScrollPos = this.$scrollTop + this.windowHeight;
    this.$stopScrollPos = this.$scrollTop + this.windowHeight - 300;
    // console.log(this.$dispScrollPos);
    console.log(this.$dispPosition);

    if (this.$dispPosition <= this.$dispScrollPos) {
      this.$banner.style.visibility = 'visible';
      this.$banner.style.opacity = '1';
    } else {
      this.$banner.style.opacity = '0';
    }
    if (this.$stopPosition <= this.$stopScrollPos) {
      this.$banner.classList.add('is-stop');
    } else {
      this.$banner.classList.remove('is-stop');
    }
  }
}
