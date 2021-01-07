(function () {
  'use strict';

  $('.js-accordion').on('click', function () {
    var $btn = $(this);
    $btn
      .parents('.l-accordion')
      .find('.m-accordion')
      .slideToggle(function () {
        var $accordion = $(this);
        if ($accordion.hasClass('is-open')) {
          $accordion.removeClass('is-open');
          $btn.removeClass('is-open');
        } else {
          // var scrollPosition = $accordion.parents('.m-contentsBlock').offset().top;
          // $('html, body').animate({ scrollTop: scrollPosition }, 500);
          $accordion.addClass('is-open');
          $btn.addClass('is-open');
        }
      });
    return false;
  });

  $('.js-smooth').on('click', function () {
    var href = $(this).attr('href'); // href未定義なので追加。
    //if($(this).toggleClass('.contWrap').css('display') == 'none'){
    if ($(href).parents('.m-accordion').css('display') == 'none') {
      $(href).parents('.l-accordion').find('.js-accordion').trigger('click');
    }
    var pos = $(href).offset().top - 60;
    $('html, body').animate({ scrollTop: pos }, 500);
    return false;
    //return false; // scrollTop を変更しないのならtrueが必要。
  });

  new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 2,
    // spaceBetween: 10,
    centeredSlides: true,
    breakpoints: {
      // 768px以上の場合
      768: {
        slidesPerView: 1,
        clickable: false,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //CV関数
  function cvScrollEvent() {
    var dispPosition = $('#cvShow').offset().top;
    var nowScroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var dispScrollPos = nowScroll + windowHeight;
    var stopPosition = $('#btnEnd').offset().top;
		var stopScrollPos = nowScroll + windowHeight - 100;
    if (dispPosition <= dispScrollPos) {
      $('.l-cv').not(':animated').fadeIn();
    } else {
      $('.l-cv').not(':animated').fadeOut();
    }
    if (stopPosition <= stopScrollPos) {
      $('.l-cv').addClass('is-stop');
    } else {
      $('.l-cv').removeClass('is-stop');
    }
  }

  //CV(touchmoveはipad対策)
  $(window).on('scroll', function () {
    cvScrollEvent();
  });
  //   new Swiper('.slider2', {
  //     loop: true,
  //     slidesPerView: 2,
  //     spaceBetween: 10,
  //     centeredSlides: true,
  //     pagination: '.swiper-pagination',
  //     nextButton: '.swiper-button-next',
  //     prevButton: '.swiper-button-prev',
  //     breakpoints: {
  //       767: {
  //         slidesPerView: 1,
  //         spaceBetween: 0,
  //       },
  //     },
  //   });

  //スムーススクロール
  // smoothScroll();

  // function smoothScroll() {
  //     var $buttons = document.querySelectorAll('a[href^="#"]');
  //     for (let i = 0; i < $buttons.length; i++) {
  //         $buttons[i].addEventListener('click', function () {
  //             var id = $buttons[i].getAttribute('href');
  //             var $position = document.querySelector(id);
  //             Velocity($position, 'scroll', {
  //                 duration: 800,
  //                 offset: -65,
  //                 easing: 'ease-out'
  //             });
  //         });
  //     }
  // }

  //モーダル開閉
  // openModal();
  // closeModal();

  // function openModal() {
  //     var $modalLink = document.querySelector('#js-modal_link');
  //     var $overlay = document.querySelector('.overlay');
  //     var $modalContents = document.querySelector('.modal_contents');
  //     // モーダルウィンドウを開く
  //     $modalLink.addEventListener('click', function (e) {
  //         e.preventDefault();
  //         $overlay.style.display = 'block';
  //         Velocity($overlay, 'fadeIn', {
  //             duration: 500
  //         });
  //     });
  //     //　モーダルコンテンツ内クリック時にモーダルウィンドウが閉じるのを防ぐ
  //     $modalContents.addEventListener('click', function (e) {
  //         e.stopPropagation();
  //     });
  // }

  // function closeModal() {
  //     var $close = document.querySelector('.close');
  //     var $overlay = document.querySelector('.overlay');
  //     // オーバーレイクリック時オーバーレイを削除
  //     $overlay.addEventListener('click', function (e) {
  //         e.preventDefault();
  //         Velocity($overlay, 'fadeOut', {
  //             duration: 100
  //         });
  //     });
  //     // クローズリンククリック時にオーバーレイを削除する
  //     $close.addEventListener('click', function (e) {
  //         e.preventDefault();
  //         Velocity($overlay, 'fadeOut', {
  //             duration: 300
  //         });
  //     });
  // }

  //ハンバーガーメニュー開閉
  // hamburger();

  // function hamburger() {
  //     var $hamburger = document.querySelector('#menu');
  //     var $hamburgerLine = document.querySelectorAll('.hamburger_line');
  //     var $menu = document.querySelector('.sub-menu');
  //     var $bg = document.querySelector('#bg');
  //     $hamburger.addEventListener('click', function () {
  //         for (var i = 0; i < $hamburgerLine.length; i++) {
  //             $hamburgerLine[i].classList.toggle('is-active');
  //         }
  //         $menu.classList.toggle('sub-menu-active');
  //         $bg.classList.toggle('sub-menu__bg');
  //     });
  // }

  // タブ遷移
  // tabSwitch();

  // function tabSwitch() {
  //     var $tabs = document.querySelectorAll('.tab');
  //     for (var i = 0; i < $tabs.length; i++) {
  //         $tabs[i].addEventListener('click', function () {
  //             // タブのclassの値を変更
  //             document.querySelector('.is-active').classList.remove('is-active');
  //             this.classList.add('is-active');
  //             // コンテンツのclassの値を変更
  //             document.querySelector('.is-show').classList.remove('is-show');
  //             const arrayTabs = Array.prototype.slice.call($tabs); //引数にとったオブジェクトを配列に変換
  //             const index = arrayTabs.indexOf(this); //配列に対してだけ使い、DOMを引数にとって一致した要素番号を戻す
  //             document.querySelectorAll('.panel')[index].classList.add('is-show');
  //         });
  //     }

  // }

  // function tabSwitch() {
  //     var $tabs = document.querySelectorAll('.tab');
  //     for (var i = 0; i < $tabs.length; i++) {
  //         (function (n) {
  //             $tabs[n].addEventListener('click', function () {
  //                 // タブのclassの値を変更
  //                 document.querySelector('.is-active').classList.remove('is-active');
  //                 this.classList.add('is-active');
  //                 // コンテンツのclassの値を変更
  //                 document.querySelector('.is-show').classList.remove('is-show');
  //                 document.querySelectorAll('.panel')[n].classList.add('is-show');
  //             });
  //         })(i);
  //     }

  // }
})();
