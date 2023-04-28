

const aboutCanvas = document.getElementById('about-canvas'),
sectionUsedIn = aboutCanvas.getAttribute('data-sectionUsedIn'),
aboutContext = aboutCanvas.getContext("2d"),
aboutFrameCount = 15;
const aboutCurrentFrame = (index) => {
    return `${sectionUsedIn == 'homepage' ? 'images/about/homepage-about-banner-min.png' : 'images/about/banner-desktop.png'}`
};

const aboutImg = new Image();
aboutImg.src = aboutCurrentFrame(30);
aboutCanvas.width = 2000;
aboutCanvas.height = 1000;

aboutImg.onload = () => {
    aboutContext.drawImage(aboutImg,0,0)
}

