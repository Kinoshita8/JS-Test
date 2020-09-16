//スムーススクロール

function smoothscroll(element) {
    Velocity(element, 'scroll', {
        duration: 800,
        offset: -65,
        easing: 'ease-out'
    });
};

/**
var scroll1 = document.querySelector('.link-scroll1');
var scroll1Section = document.getElementById('scroll1');
scroll1.addEventListener('click', e => {
    e.preventDefault();
    smoothscroll(scroll1Section);
});

var scroll2 = document.querySelector('.link-scroll2');
var scroll2Section = document.getElementById('scroll2');
scroll2.addEventListener('click', e => {
    e.preventDefault();
    smoothscroll(scroll2Section);
});

var scroll3 = document.querySelector('.link-scroll3');
var scroll3Section = document.getElementById('scroll3');
scroll3.addEventListener('click', e => {
    e.preventDefault();
    smoothscroll(scroll3Section);
});
 */

var btns = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var id = btns[i].getAttribute('href');
        id = id.replace('#', '');
        var position = document.getElementById(id);
        smoothscroll(position);
    });
}

//モーダル開閉
(function () {
    'use strict';

    // マッチしたid名を持つ要素を取得、変数の定義
    var modalLink,
        overlay,
        modalContents,
        close;

    modalLink = document.getElementById('js-modal_link');
    overlay = document.querySelector(".overlay");
    modalContents = document.querySelector(".modal_contents");
    close = document.querySelector(".close");
    openModal(overlay, modalContents);
    closeModal(overlay, close);

    function openModal(overlay, element) {
        // モーダルウィンドウを開く
        modalLink.addEventListener('click', function (e) {
            e.preventDefault();
            overlay.style.display = 'block';
            Velocity(overlay, "fadeIn", {
                duration: 500
            });
        });
        //　モーダルコンテンツ内クリック時にモーダルウィンドウが閉じるのを防ぐ（親要素への伝播を止める）
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }

    function closeModal(overlay, close) {
        // オーバーレイクリック時オーバーレイを削除
        overlay.addEventListener('click', function (e) {
            e.preventDefault();
            Velocity(overlay, "fadeOut", {
                duration: 100
            });
        });
        // クローズリンククリック時にオーバーレイを削除する
        close.addEventListener('click', function (e) {
            e.preventDefault();
            Velocity(overlay, "fadeOut", {
                duration: 300
            });
        });
    }
}());

//ハンバーガーメニュー開閉
(function hamburger () {
    'use strict';

    var ham,
        hamItems,
        menu,
        bg,
        isAnimation = false;

    ham = document.getElementById('menu');
    hamItems = document.querySelectorAll('span');
    menu = document.querySelector('.sub-menu');
    bg = document.getElementById('bg');

    ham.addEventListener('click', function () {
        for (var i = 0; i < hamItems.length; i++) {
            // 上記if文を削除し、下記コードをアクティブにしても実行可能
            hamItems[i].classList.toggle('is-active');
        }
        menu.classList.toggle('sub-menu-active');
        bg.classList.toggle('sub-menu__bg');

    });
}());