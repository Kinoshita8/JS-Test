(function () {
    'use strict';

    //スムーススクロール
    smoothScroll();

    function smoothScroll() {
        var $buttons = document.querySelectorAll('a[href^="#"]');
        for (let i = 0; i < $buttons.length; i++) {
            $buttons[i].addEventListener("click", function () {
                var id = $buttons[i].getAttribute('href');
                id = id.replace('#', '');
                var $position = document.getElementById(id);
                Velocity($position, 'scroll', {
                    duration: 800,
                    offset: -65,
                    easing: 'ease-out'
                });
            });
        }
    }

    //モーダル開閉
    openModal();
    closeModal();

    function openModal() {
        var $modalLink = document.getElementById('js-modal_link');
        var $overlay = document.querySelector(".overlay");
        var $modalContents = document.querySelector(".modal_contents");
        // モーダルウィンドウを開く
        $modalLink.addEventListener('click', function (e) {
            e.preventDefault();
            $overlay.style.display = 'block';
            Velocity($overlay, "fadeIn", {
                duration: 500
            });
        });
        //　モーダルコンテンツ内クリック時にモーダルウィンドウが閉じるのを防ぐ（親要素への伝播を止める）
        $modalContents.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }

    function closeModal() {
        var $close = document.querySelector(".close");
        var $overlay = document.querySelector(".overlay");
        // オーバーレイクリック時オーバーレイを削除
        $overlay.addEventListener('click', function (e) {
            e.preventDefault();
            Velocity(overlay, "fadeOut", {
                duration: 100
            });
        });
        // クローズリンククリック時にオーバーレイを削除する
        $close.addEventListener('click', function (e) {
            e.preventDefault();
            Velocity($overlay, "fadeOut", {
                duration: 300
            });
        });
    }

    //ハンバーガーメニュー開閉
    hamburger();

    function hamburger() {
        var $hamburger = document.getElementById('menu');
        var $hamburgerLine = document.querySelectorAll('span');
        var $menu = document.querySelector('.sub-menu');
        var $bg = document.getElementById('bg');
        $hamburger.addEventListener('click', function () {
            for (var i = 0; i < $hamburgerLine.length; i++) {
                $hamburgerLine[i].classList.toggle('is-active');
            }
            $menu.classList.toggle('sub-menu-active');
            $bg.classList.toggle('sub-menu__bg');
        });
    }
}());