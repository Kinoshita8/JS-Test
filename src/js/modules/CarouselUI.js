export default class CarouselUI {
  constructor() {
    this.$slides = Array.from(document.querySelectorAll('.bl_carousel_item'));
    this.$carousel = document.querySelector('.bl_carousel_list');
    this.$prev = document.querySelector('.bl_carousel_prev');
    this.$next = document.querySelector('.bl_carousel_next');
    this.$indicators = Array.from(
      document.querySelectorAll('.bl_carousel_indicator')
    );
    this.index = 1;
    this.bind();
  }

  /**
   * イベント付与
   */
  bind() {
    this.$prev.addEventListener('click', () => {
      this.$carousel.style.transition = '0.5s';
      this.index -= 1;
      this.slide();
      this.updateIndicator(this.index);
    });

    this.$next.addEventListener('click', () => {
      this.$carousel.style.transition = '0.5s';
      this.index += 1;
      this.slide();
      this.updateIndicator(this.index);
    });
  }

  /**
   * 表示スライドの更新
   */
  slide() {
    if (this.index === 0) {
      this.$carousel.style.transform = `translateX(${-100 * this.index}%)`;
      setTimeout(() => {
        this.index = 4;
        this.$carousel.style.transition = '0s';
        this.$carousel.style.transform = `translateX(${-100 * this.index}%)`;
        this.updateIndicator(this.index);
      }, 500);
      return;
    }
    if (this.index === this.$slides.length - 1) {
      this.$carousel.style.transform = `translateX(${-100 * this.index}%)`;
      setTimeout(() => {
        this.index = 1;
        this.$carousel.style.transition = '0s';
        this.$carousel.style.transform = `translateX(${-100 * this.index}%)`;
        this.updateIndicator(this.index);
      }, 500);
      return;
    }
    this.$carousel.style.transform = `translateX(${-100 * this.index}%)`;
  }

  /**
   * 表示スライドのインデックスを更新
   * @param {*} index
   */
  updateIndicator(index) {
    this.$indicators.forEach(($indicator) => {
      $indicator.classList.remove('current');
    });
    this.$indicators[index - 1].classList.add('current');
  }
}
