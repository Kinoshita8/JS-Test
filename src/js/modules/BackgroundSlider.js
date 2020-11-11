export default class BackgroundSlider {
  constructor() {
    this.$backgroundSlides = Array.from(
      document.querySelectorAll('.js-backgroundSlide')
    );
    this.slideIndex = 0;
    this.$backgroundSlidesLength = this.$backgroundSlides.length;
    this.bind();
  }

  /**
   * イベント付与
   */
  bind() {
    this.checkClassIndex();
    setInterval(() => {
      this.updateSlide(this.updateIndex());
    }, 3000);
  }

  /**
   * 現在表示されている背景のクラスを確認
   */
  checkClassIndex() {
    this.$backgroundSlides.forEach(($element, index) => {
      if ($element.classList.contains('fadein')) {
        this.slideIndex = index;
        $element.style.opacity = 1;
      } else {
        $element.style.opacity = 0;
      }
    });
  }

  /**
   * 表示させるクラスのインデックスを更新
   */
  updateIndex() {
    this.slideIndex >= this.$backgroundSlidesLength - 1
      ? (this.slideIndex = 0)
      : this.slideIndex++;
    return this.slideIndex;
  }

  /**
   * スライドを更新
   * @param {*} slideIndex
   */
  updateSlide(slideIndex) {
    this.fadeOutSlide();
    this.fadeInSlide(slideIndex);
  }

  /**
   * 非表示にする
   */
  fadeOutSlide() {
    this.$backgroundSlides.forEach(($backgroundSlide) => {
      $backgroundSlide.classList.remove('fadein');
      $backgroundSlide.classList.add('fadeout');
      $backgroundSlide.style.opacity = 0;
    });
  }

  /**
   * 表示する
   * @param {*} slideIndex
   */
  fadeInSlide(slideIndex) {
    const $target = this.$backgroundSlides[slideIndex];
    $target.classList.add('fadein');
    $target.classList.remove('fadeout');
    $target.style.opacity = 1;
  }
}
