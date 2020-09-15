


var smoothscroll = (element) =>{
    Velocity(element, 'scroll', {
        duration: 800,
        offset: -20,
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
  btns[i].addEventListener("click",function(){
    var id = btns[i].getAttribute('href');
    id = id.replace('#','');
    var position = document.getElementById(id);
    smoothscroll(position);
  });
}