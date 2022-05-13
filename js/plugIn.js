var swiper = new Swiper(".myBanner", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var winWidth = $(window).width();

if (winWidth <= 425){
  prodSwiper = new Swiper(".proSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
  });
} else if(winWidth <= 768){
  var prodSwiper = new Swiper(".proSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });
} else if (winWidth >= 769){
  prodSwiper = new Swiper(".proSwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 5,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });
}

$(window).on('resize', function(){
  winWidth = $(window).width();
  if (winWidth <= 425){
    prodSwiper = new Swiper(".proSwiper", {
      slidesPerView: 1.5,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: true,
    });
  } else if (winWidth <= 768){
    prodSwiper = new Swiper(".proSwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    })
  } else if (winWidth >= 769){
    prodSwiper = new Swiper(".proSwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 5,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    })
  } 
})


if (winWidth <= 425){
  styleSwiper = new Swiper(".myStyling", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    scrollbar : false,
    loop:true,
  });
} else if (winWidth <= 768){
  var styleSwiper = new Swiper(".myStyling", {
    slidesPerView: 2.5,
    spaceBetween: 30,
    scrollbar : false,
    loop:true,
  });
} else if (winWidth >= 769){
  styleSwiper = new Swiper(".myStyling", {
    slidesPerView: 3,
    spaceBetween: 50,
    scrollbar : false,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}


$(window).on('resize', function(){
  winWidth = $(window).width();
  if (winWidth <= 425){
    styleSwiper = new Swiper(".myStyling", {
      slidesPerView: 1.5,
      spaceBetween: 30,
      scrollbar : false,
      loop:true,
    });
  } else if (winWidth <= 768){
    styleSwiper = new Swiper(".myStyling", {
      slidesPerView: 2.5,
      spaceBetween: 30,
      scrollbar : false,
      loop:true,
    });
  } else if (winWidth >= 769){
    stlyeSwiper = new Swiper(".myStyling", {
      slidesPerView: 3,
      scrollbar : false,
      loop: true,
      spaceBetween: 50,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
})
