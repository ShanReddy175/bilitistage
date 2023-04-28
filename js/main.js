






window.onbeforeunload = function () {
    $(document).ready(function(){
        $('html').scrollTop(0);
    });
  }


/* Homepage canvas */

const homeProductCanvas = (canvasId='taskman-canvas',canvasWidth=2000,canvasHeight=1000,canvasImgSrc='images/product/taskman/white/white') => {
    const homeProductCanva = document.getElementById(`${canvasId}`),
          homeProductContext = homeProductCanva.getContext("2d"),
          homeProductFrameCount = 15,
          homeProductCurrentFrame = (index) => {
            return `${canvasImgSrc}-0${index.toString().padStart(4,'0')}.png`
          };

          productPreloadImages = () => {
            for(i=1;i<homeProductFrameCount; i++){
                const img = new Image();
                img.src = homeProductCurrentFrame(i)
            }
          };
    
    const img = new Image();
    img.src = homeProductCurrentFrame(14);
    homeProductCanva.width = canvasWidth;
    homeProductCanva.height = canvasHeight;
    
    img.onload = () => {
        homeProductContext.drawImage(img,0,0)
    }
    
    
    
    let updateImage = (i) => {
        homeProductContext.clearRect(0,0,homeProductCanva.width,homeProductCanva.height);
        img.src = homeProductCurrentFrame(i);
        homeProductContext.drawImage(img,0,0);
    }
    
    function newFun(i){
        setTimeout(()=>{
            homeProductContext.clearRect(0,0,homeProductCanva.width,homeProductCanva.height);
            updateImage(i);
            productPreloadImages();
        },50 * i)
    }
    
    
        for(i=0;i<homeProductFrameCount;i++){
            newFun(i);
        }          
}
homeProductCanvas();

const homeproductArray = [
    {
        id:'taskman-canvas',
        width:2000,
        height:1000,
        src:'images/product/taskman/white/white'
    },
    {
        id:'dumpstar-canvas',
        width:2000,
        height:1000,
        src:'images/product/dumpstar/blue/blue'
    },
    {
        id:'taskmanob-canvas',
        width:2000,
        height:1000,
        src:'images/product/taskman-ob/green/green'
    }
    
]




/* HomePage Product Banners */

// homeproductArray.map((product)=>{
//     return homeProductCanvas(product.id,product.width,product.height,product.src);
// })


const paginationProduct = document.querySelectorAll('.taskman-bottom .swiper-pagination-bullet'),
      homeSwiperSlide = document.querySelectorAll('.product-swiper-container .swiper-slide');


paginationProduct.forEach((page,index)=>{
    page.addEventListener('click',()=>{
        let product = homeproductArray[index];
        homeProductCanvas(product.id,product.width,product.height,product.src)
    },false)
})




/* Taskman Section */

let homepageProductBullet = document.querySelectorAll('.taskman-bottom .swiper-pagination-bullet');


homepageProductBullet.forEach((bullet) => {
    bullet.addEventListener('click',(e) => {
        // console.log(bullet)
        if(bullet.classList.contains('swiper-pagination-bullet-active')){
            return;
        }


        
    },false)
})



/* Mobile Screen Click function */

const mobileScreenBtn = document.querySelectorAll('.mobile-screen-btn'),
      mobileScreenImg1 = document.querySelector('.mobile-screen-img img'),
      mobileScreenContent = document.querySelectorAll('.mobile-screen-content-div'),
      mobileImgSrc = (index) => {
        return `images/mobileUIScreen-${index}.png`
      }


mobileScreenBtn.forEach((btn,index) => {
    btn.addEventListener('click',()=>{
        $('.mobile-screen-btn').removeClass('active');
        $('.mobile-screen-content-div').removeClass('active');
        btn.classList.add('active');
        mobileScreenImg1.src = mobileImgSrc(index + 1);
        mobileScreenContent[index].classList.add('active');
    },false)
})


const bannerSection = document.querySelector('.section-banner'),
      navSection = document.querySelector('.section-navigation'),
      taskmanBottom = document.querySelector('.taskman-bottom'),
      taskmanTop = document.querySelector('.taskman-top');
    //   videoEle = document.querySelectorAll('myVideo');
 



var videoElement = document.querySelectorAll(".myVideo");

videoElement.forEach((myVideo) => {
    document.addEventListener("visibilitychange", function() {
        if(document.visibilityState==="hidden")
        {
            myVideo.pause();
        }
        else if(document.visibilityState==="visible")
        {
            myVideo.play();
        }      
    })

    myVideo.addEventListener('ended',()=>{
        myVideo.style.opacity = '0';
        myVideo.style.visibility = 'hidden';
        $('.section-banner').addClass('afterClass');
        // setTimeout(()=>{
        //     $('header').removeClass('nav-up');
        // },500)
        setTimeout(()=>{
            // bannerSection.style.height = `calc(100vh - ${navSection.clientHeight}px)`;
            $('.section-navigation').addClass('active');
            $('.home-body').css({
                'overflow-y':'auto'
            },10000)
        },1000)
    })
})





function isMobile() {
    var check = false;
    (function(a){
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
        check = true;
    // @ts-ignore
    })(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};


