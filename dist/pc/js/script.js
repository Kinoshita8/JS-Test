


var smoothscroll = (element) =>{
    Velocity(element, 'scroll', {
        duration: 800,
        offset: -20,
        easing: 'ease-out'
    });
};

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