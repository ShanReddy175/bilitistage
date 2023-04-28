

var swiper = new Swiper('.swiper-gallery',{
    slidesPerView : 5,
    spaceBetween : 25,
    loop:true,
    freeMode: true,
    centeredSlides: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-30%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    autoplay : {
        delay:3000,
        disableOnInteraction:false
    },
    breakpoints:{
        250 : {
            slidesPerView:1,
            spaceBetween:10
        },
        768 : {
            slidesPerView:3,
            spaceBetween:10
        },
        1024:{
            slidesPerView:5,
            spaceBetween:25,
        }
    }
})
