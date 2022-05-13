var lastScrollTop = 0;
var delta = 5;
var fixBox = document.querySelector('.bottomNav');
var fixBoxHeight = fixBox.offsetHeight;
var didScroll;

window.onscroll = function(e){
    didScroll = true;
}

setInterval(function(){
    if(didScroll){
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled(){
    var nowScrollTop = window.scrollY;
    if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
        return;
    }
    if(nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
        fixBox.classList.remove('show');
    } else {
        if(nowScrollTop + window.innerHeight >= document.body.offsetHeight){
            fixBox.classList.add('show');
        }
    }

    if(nowScrollTop == 0){
        fixBox.classList.add('show');
    }
    lastScrollTop = nowScrollTop;
}