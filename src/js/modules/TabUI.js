export default class TabUI {
  constructor() {
    this.$tabs = Array.from(document.querySelectorAll('.tab'));
    this.$panels = Array.from(document.querySelectorAll('.panel'));
    this.bind();
  }

  /**
   * イベント付与
   */
  bind() {
    this.$tabs.forEach(($tabs, i) => {
      $tabs.addEventListener('click', () => {
        this.tabSwitch($tabs, this.$panels[i]);
      });
    });
  }

  /**
   * タブ遷移
   */
  tabSwitch(tab, panel) {
    document.querySelector('.is-active').classList.remove('is-active');
    tab.classList.add('is-active');
    document.querySelector('.is-show').classList.remove('is-show');
    panel.classList.add('is-show');
  }
}
