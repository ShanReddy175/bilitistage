/* Scroll Animation */
var $window = $(window);
export const ElementScrollAnimation = ($ele,$parent,whereAnimStart,bottomValue = 0) => {
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
                  eleBottomToCenterPerc
                };
    if($ele == document.querySelectorAll('.text-elements span')){

        // console.log(
        //     `
        //     Element OffsetTop : ${z},
        //     Element OffsetHeight : ${x},
        //     Parent OffsetTop : ${pz},
        //     Parent OffsetHeight : ${px},
        //     Window innerheight : ${y},
        //     Window ScrollTop : ${st},
        //     Entry Value : ${Entry},
        //     AnimEntry : ${animEntry},
        //     Parent Entry Value : ${parentEntry},
        //     Parent AnimEntry : ${parentAnimEntry},
        //     html Height : ${htmlHeight},
        //     Window Scroll Top In percentage : ${windowScrollInPercentage},
        //     Element Scroll Top In percentage : ${eleScrollInPercentage},
        //     Entry value In Percentage : ${EntryInPercentage},
        //     AnimEntry In Percenatge : ${animEntryInperc},
        //     Element Bottom : ${eleBottom},
        //     Element Bottom In percentage : ${eleBottomInPercentage},
        //     AnimExit : ${animExit},
        //     animExit In Percentage : ${animExitInperc}
        //     Element Bottom To Center Percentage : ${eleBottomToCenterPerc},
        //     Parent Scroll Top In percentage : ${parentScrollInPercentage},
        //     Parent Entry value In Percentage : ${parentEntryInPercentage},
        //     Parent AnimEntry In Percenatge : ${parentAnimEntryInperc},
        //     Parent Bottom : ${parentBottom},
        //     Parent Bottom In percentage : ${parentBottomInPercentage},
        //     Parent AnimExit : ${parentAnimExit},
        //     Parent animExit In Percentage : ${parentAnimExitInperc},
        //     Parent Bottom To Center Percentage : ${parentBottomToCenterPerc}
        //     `
        // )
    }

    return result ;


}
