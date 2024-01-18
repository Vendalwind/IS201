/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})
$(window).bind('scroll',function(e){
    parallaxScroll();
});
//Some attempts at providing a custom JS parallax scrolling, I ultimately decided I was spending too much time trying to get this to work right, and JS is outta the scope of this class. Havent done webdev for awhile so felt kinda good to dabble again
// function parallaxScroll(){
//    var scrolled = $(window).scrollTop(); 
//    $('.layer-1').css('top',(0-(scrolled*.25))+'px');
//    $('.layer-2').css('top',(0-(scrolled*.5))+'px');
//    $('.layer-3').css('top',(0-(scrolled*.75))+'px');
//    $('.rock-1').css('top',(400-(scrolled*.8))+'px');
//    $('.rock-2').css('top',(200-(scrolled*.6))+'px');
//    $('.rock-3').css('top',(500-(scrolled*.4))+'px'); 
//    $('.rock-4').css('top',(600-(scrolled*.5))+'px'); 
//    $('.rock-5').css('top',(600-(scrolled*.7))+'px'); 
//    $('.rock-6').css('top',(400-(scrolled*.7))+'px'); 
//    $('.rock-7').css('top',(600-(scrolled*.5))+'px'); 
//    $('.rock-8').css('top',(200-(scrolled*.2))+'px');
//    $('.rock-9').css('top',(200-(scrolled*.4))+'px');
// }
// window.addEventListener('scroll', function(event) {
//     var depth, i, layer, layers, len, movement, topDistance, translate3d;
//     topDistance = this.pageYOffset;
//     layers = document.querySelectorAll("[data-type='parallax']");
//     for (i = 0, len = layers.length; i < len; i++) {
//       layer = layers[i];
//       depth = layer.getAttribute('data-depth');
//       movement = -(topDistance * depth);
//       translate3d = 'translate3d(0, ' + movement + 'px, 0)';
//       layer.style['-webkit-transform'] = translate3d;
//       layer.style['-moz-transform'] = translate3d;
//       layer.style['-ms-transform'] = translate3d;
//       layer.style['-o-transform'] = translate3d;
//       layer.style.transform = translate3d;
//     }
//   });
