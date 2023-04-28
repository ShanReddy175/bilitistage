

function isMobile() {
    var check = false;
    (function(a){
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
        check = true;
    // @ts-ignore
    })(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

if(!isMobile()){
    let mobileScreen = document.querySelector('.mobility-screen'),
    mobileScreenImg = document.querySelector('.mobile-screen-img'),
    mobileScreenDetails = document.querySelector('.mobile-screen-content');

mobileScreen.style.height = `calc(${mobileScreen.clientHeight + mobileScreenImg.clientHeight + mobileScreenDetails.clientHeight - 40}px)`
}
/* Scroll Animation */
var $window = $(window);
const ElementScrollAnimation = ($ele,$parent,whereAnimStart,bottomValue = 0) => {
    let x = $ele.offsetHeight,
        px= $parent.offsetHeight,
        y = window.innerHeight,
        z = $ele.offsetTop,
        pz = $parent.offsetTop,
        st = $window.scrollTop(),
        eleBottom = (z + (x/2)) ,
        parentBottom = (pz + (px/2)),

        Entry = whereAnimStart == 'bottom' ? z + (x/2)- (y) : 
                whereAnimStart == 'center' ? z + (x/2)- (y/2) : z + (x/2)- (y/2),
        parentEntry = whereAnimStart == 'bottom' ? pz + (px/2)- (y) : 
                      whereAnimStart == 'center' ? pz + (px/2)- (y/2) : pz + (px/2)- (y/2),
        animEntry  = st >= Entry,
        parentAnimEntry  = st >= parentEntry,
        animExit = st <= eleBottom,
        parentAnimExit = st <= parentBottom,
        htmlHeight = $('html').height(),

        windowScrollInPercentage = Math.round((st/htmlHeight) * 100),
        eleScrollInPercentage = Math.round((z/htmlHeight) * 100),
        parentScrollInPercentage = Math.round((pz/htmlHeight) * 100),
        EntryInPercentage =  (Math.round((Entry/htmlHeight) * 100)) + bottomValue,
        parentEntryInPercentage = Math.round((parentEntry/htmlHeight) * 100),
        eleBottomInPercentage = Math.round((eleBottom / htmlHeight) * 100 ),
        parentBottomInPercentage = Math.round((parentBottom / htmlHeight) * 100 ),

        animEntryInperc = windowScrollInPercentage >= EntryInPercentage,
        parentAnimEntryInperc = windowScrollInPercentage >= EntryInPercentage,
        animExitInperc = windowScrollInPercentage <= eleBottomInPercentage,
        parentAnimExitInperc = windowScrollInPercentage <= parentBottomInPercentage,

        eleBottomToCenterPerc = Math.round(((st - z + (y))/(x+y)) * 100),
        parentBottomToCenterPerc = Math.round(((st - pz + (y))/(px+y)) * 100),

        result = {
                  animEntryInperc,
                  animExitInperc,
                  parentAnimEntryInperc,
                  parentAnimExitInperc, 
                  eleBottomInPercentage, 
                  windowScrollInPercentage,
                  eleBottomToCenterPerc,
                  z,x,pz,px,y,st,Entry,parentEntry,parentAnimEntry,htmlHeight,
                  eleScrollInPercentage,EntryInPercentage,eleBottom,
                  animExit,eleBottomToCenterPerc,parentScrollInPercentage,parentEntryInPercentage,
                  parentBottom,parentBottomInPercentage,parentAnimExit,parentBottomToCenterPerc,animEntry
                };

    return result ;
}


document.querySelector('.customHeaderSpan1').style.height = `${document.querySelector('.fixedLeftEle').clientHeight}px`;


$window.scroll(()=>{

    /* Header animation */
    let ele = document.querySelector('.battery-top-section');
        eleChild = ele.querySelector('h2'),
        eleFun = ElementScrollAnimation(eleChild,ele,'center'),
        opacityValue = (eleFun.eleBottomInPercentage - eleFun.windowScrollInPercentage) / 10;

        if(eleFun.st >= Math.round(eleFun.Entry)){
            $('.customHeader').addClass('active')
        }
        else{
            $('.customHeader').removeClass('active')
        }

    let textSpan = document.querySelectorAll('.text-elements span');
    textSpan.forEach((textspan)=>{
        let spanFun = ElementScrollAnimation(textspan,ele,'bottom',3);
        textspan.style.opacity = spanFun.animEntryInperc && spanFun.animExitInperc ? "1" : "0.3";
    })
        
    

    /* Image Scroll Animation */    
    let imgEle = document.querySelector('.fixedLeftEle'),
        imgFun = ElementScrollAnimation(imgEle,ele,'bottom');

    if(imgFun.animEntryInperc && imgFun.animExitInperc){
        $('.fixedLeftEle').css({
            'transform':`translateX(calc(-100% + ${1.5 * imgFun.eleBottomToCenterPerc > 75 ? 75 : 1.5 * imgFun.eleBottomToCenterPerc }%))`,
            'position':'sticky',
            'top':'75px'
        })
    }
    else{
        $('.fixedLeftEle').css({
            'position':'sticky'
        })
    }
    


    /* Battery Bottom Section */

    let batteryBottom = document.querySelector('.battery-bottom-section'),
        batteryAuto = document.querySelector('.battery-with-auto'),

        batteryAutoFun = ElementScrollAnimation(batteryAuto,batteryBottom,'bottom'),
        trollyHeightRes = document.querySelector('.rightSideImg').offsetHeight - document.querySelector('.trolly-img').offsetHeight;

        if(batteryAutoFun.animEntryInperc && batteryAutoFun.animExitInperc){
            $('.rightSideImg').css({
                'position':'sticky',
                'top' :`${isMobile() ? '40%' : batteryAutoFun.eleBottomToCenterPerc > 30 ? '20%':'20%'}`,
            })


            $('.trolly-img').css({
                'transform':`translateX(calc(-100% + 
                    ${batteryAutoFun.eleBottomToCenterPerc > 28 ? 
                        1.5 * (batteryAutoFun.eleBottomToCenterPerc) > 100 ? 100  : 
                        1.5 * (batteryAutoFun.eleBottomToCenterPerc) < 50 ? 50 : 
                        1.5 * (batteryAutoFun.eleBottomToCenterPerc) : '0'}%))`,
                'position':'sticky',
                'top':`${batteryAutoFun.eleBottomToCenterPerc > 28 ? `calc(${isMobile() ? '40%' : '20%'} + ${trollyHeightRes}px)` : '0%'}`
            })

        }



        let bmSpan = document.querySelectorAll('.bmbm span');
        bmSpan.forEach((bmspan)=>{
            let bmSpanFun = ElementScrollAnimation(bmspan,batteryBottom,'bottom',3);
            bmspan.style.opacity = bmSpanFun.animEntryInperc && bmSpanFun.parentAnimEntryInperc ? "1" : "0.3";
        })    



        let bmbmEle = document.querySelector('.bmbm'),
            bmbmEleFun = ElementScrollAnimation(bmbmEle,batteryBottom,'center',-3);

        if(bmbmEleFun.animEntryInperc && bmbmEleFun.animExitInperc){
            $('.bmbm').addClass('active');
        }
        else{
            $('.bmbm').removeClass('active')
        }


        /* Mobile UI Screen Animation */

        if(!isMobile()){
            let mobileScreen = document.querySelector('.mobility-screen'),
            mobileScreenFun = ElementScrollAnimation(mobileScreen,mobileScreen,'center')

            if(mobileScreenFun.st >= (mobileScreenFun.z + 50)){
                    let bmPercent = Math.round(
                        ((mobileScreenFun.st - (mobileScreenFun.z + 50)) 
                        / ((mobileScreenFun.x) - (mobileScreenFun.y + 50))) * 100);

                    
                        
               $('.mobile-screen-img').css({
                    'visibility':bmPercent > 0 ? 'visible':'hidden',
                    'transform':`translate3d(-50%,calc(100% - ${2* bmPercent > 100 ? 100 : 2* bmPercent}%),0)`
               }) 
               if(bmPercent >= 52){
                $('.mobile-screen-content').css({
                    'visibility': 'visible',
                    'transform':`translate3d(calc(100% - ${bmPercent >= 65 ? 100 : (4 * Math.round(bmPercent - 52))}%),0,0)`
               })
               }
               else{
                $('.mobile-screen-content').css({
                    'visibility':'hidden'
                })
               }     
               
            }      
        }
        
          
})










